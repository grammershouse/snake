if(typeof(Snake) == "undefined"){var Snake = {} };

Snake.MoveSnake = function(config){
    
    var me = this;   
    var boundsLeft = 160;
    var boundsRight = 735;
    var posX = 0;
    var posY = 25;
    var speedLevel = 110;
    var keyBlocked = false;
    
    var BSX = 32;// Bounds frame snake 
    var BSY = 40;// Bounds frame snake 
    var RSS = 25; //resize snake sprite    
    
    var BTB = 95;  //bounds top board
    var BBB = 550;  //bounds bottom board    
    
    this.sourceX = 0;
    this.sourceY = 0;
    this.ctx = this.ctx;
    this.main = null;
    this.aFrames = [1,2,3,4,5,6,7,8,9];
    this.iFrame = 1;
    
    this.direction = RIGHT_WAY;
    me.moving = false;
    
    this.snakeObj = [];
    this.collision = false;      
    
    this.init = function(config){
        me.ctx = config.ctx;
        me.main = config.main;
        me.mS = new Image(); //main sprite
        me.mS.src = IMAGES_PATH + "sprites/MainSprite.png";
        this.initSnake();
        this.start();
    }
    
    this.initSnake = function(){
        me.snakeObj = [];
        me.snakeObj[0] = {x : 210, y : 115};
        me.snakeObj[1] = {x : 185, y : 115};
        me.snakeObj[2] = {x : 160, y : 115};

        me.collision = false;
        me.direction = RIGHT_WAY;
    }
    
    this.start = function(){
            //Interval to move snake
            setInterval(function(){
                if(!me.collision && !me.main.paused){
                    me.movingSnake(true);
                    if(me.main.Score.xScore > 1){
                        me.main.Score.xScore--;
                    }
                } 
            },speedLevel);
            
            //interval to change sprite in snake
//            setInterval(function(){ 
//                me.spriteEngine();
//            },200);             
    }
    
    this.movingSnake = function(auto){
        
        var tmpPosX = 0;
        var tmpPosY = 0;
        
        if(me.collision == true) return;
        
        for(var c = 0; c < me.snakeObj.length; c++){
                
            //tail and head if, else    
            if(c > 0){
                //temp position, follow children
                tmpPosX = me.snakeObj[c]['x'];
                tmpPosY = me.snakeObj[c]['y'];
                
                me.snakeObj[c]['x'] = posX;
                me.snakeObj[c]['y'] = posY;
                
                posX = tmpPosX;
                posY = tmpPosY;                   
            }else{
                posX = me.snakeObj[c]['x'];
                posY = me.snakeObj[c]['y'];                
                
                switch(me.direction){
                    case LEFT_WAY  : me.snakeObj[c]['x'] = me.snakeObj[c]['x'] - RSS;
                        break;

                    case DOWN_WAY  : me.snakeObj[c]['y'] = me.snakeObj[c]['y'] + RSS;
                        break;

                    case RIGHT_WAY : me.snakeObj[c]['x'] = me.snakeObj[c]['x'] + RSS;
                        break;

                    case UP_WAY    : me.snakeObj[c]['y'] = me.snakeObj[c]['y'] - RSS;
                        break;                        
                }
            }
            
            if(me.snakeObj[c].x > boundsRight) me.snakeObj[c].x = boundsLeft;
            if(me.snakeObj[c].x <  boundsLeft) me.snakeObj[c].x = boundsRight;
            
            me.ctx.clearRect (  posX, posY, 25, 25 );
        }
        
        //if collision we dont paint the snake
        if(!me.checkCollision()){
            for(var c = 0; c < me.snakeObj.length; c++){
                me.ctx.drawImage(me.mS,me.sourceX,0, BSX, BSY, me.snakeObj[c].x, me.snakeObj[c].y , RSS, RSS);
            }
        }
        
        me.checkFeed();
        keyBlocked = false;
    }
    
    this.moveLeft = function(){
        if(me.direction == RIGHT_WAY || keyBlocked) return; //oposite way not allowed
        me.direction = LEFT_WAY;
        keyBlocked = true;
    }
    
    this.moveDown = function(){
        if(me.direction == UP_WAY || keyBlocked) return; //oposite way not allowed
        me.direction = DOWN_WAY;
        keyBlocked = true;
    }

    this.moveRight = function(){
        if(me.direction == LEFT_WAY || keyBlocked) return; //oposite way not allowed
        me.direction = RIGHT_WAY;
        keyBlocked = true;
    }
    
    this.moveUp = function(){
        if(me.direction == DOWN_WAY || keyBlocked) return; //oposite way not allowed
        me.direction = UP_WAY;
        keyBlocked = true;
    }
    
    this.goMove = function(){
        me.moving = true;
        me.movingSnake(false);       
    }
    
//    this.spriteEngine = function(){
//        me.ctx.clearRect (  0, 0, 700, 500 );
//        me.sourceX = Math.floor(me.aFrames[me.iFrame] % 9) * this.BSX;
//        me.sourceY = 0;
//        
//        for(var c = 0; c < me.snakeObj.length; c++){
//            me.ctx.drawImage(me.mS, me.sourceX,0, BSX, BSY,me.snakeObj[c].x, me.snakeObj[c].y, RSS, RSS);
//        }
//        me.iFrame++;
//        if(me.iFrame  ==  me.aFrames.length) me.iFrame=1;          
//    }
    
    this.checkCollision = function(){
        for(var h = 1; h < me.snakeObj.length; h++){
            if(me.snakeObj[0].x == me.snakeObj[h].x && 
                me.snakeObj[0].y == me.snakeObj[h].y || me.snakeObj[0].y < BTB || me.snakeObj[0].y > BBB){
                me.collision = true;
                h = me.snakeObj.length;
                console.info("collision");
                me.main.restartApp();
            }
        }
        
        return me.collision;
    }
    
    this.checkFeed = function(){
        if(me.snakeObj[0].x == me.main.FoodBehavior.posX && 
            me.snakeObj[0].y == me.main.FoodBehavior.posY ){
            me.feed = true;
            console.info("feed feed");
            
            //repos food on board
            me.main.FoodBehavior.generateRandomFood();
            me.main.Score.updateScore();
            me.incSnakeTail();
        }
    }
    
    this.incSnakeTail = function(){
        var fBallObj = {x : 0, y : 0};
        me.snakeObj.push(fBallObj);        
    }
    
    this.init(config);
}