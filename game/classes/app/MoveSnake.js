if(typeof(Snake) == "undefined"){var Snake = {} };

Snake.MoveSnake = function(config){
    
    var me = this;
    this.posX = 0;
    this.posY = 20;
    this.sourceX = 0;
    this.sourceY = 0;
    this.ctx = this.ctx;
    this.aFrames = [1,2,3,4,5,6,7,8,9];
    this.iFrame = 1;
    
    this.direction = RIGHT_WAY;
    me.moving = false;
    
    this.BCS = 31;// Bounds frame snake 
    this.RSS = 25; //resize snake sprite    
    
    this.snakeObj = [];
    this.snakeObj[0] = {x : 100, y : 70};
    this.snakeObj[1] = {x : 75, y : 70};
    this.snakeObj[2] = {x : 50, y : 70};
    this.snakeObj[3] = {x : 25, y : 70};
    this.snakeObj[4] = {x : 0, y : 70};

    this.speedLevel = 300;
    this.collision = false;

    this.init = function(config){
        me.ctx = config.ctx;
        me.mS = new Image(); //main sprite
        me.mS.src = IMAGES_PATH + "sprites/MainSprite.png";   
        this.start();
    }
    
    this.start = function(){
            //Interval to move snake
            setInterval(function(){
               me.movingSnake(true);
            },me.speedLevel);
            
            //interval to change sprite in snake
            setInterval(function(){ 
                me.spriteEngine();
            },1000);             
    }
    
    this.movingSnake = function(auto){
        
        if(me.collision == true) return;
        
        if(me.moving && auto){
             me.moving = false;
            return;
        } 
       
        me.ctx.clearRect (  0, 0, 700, 500 );
        
        for(var c = 0; c < me.snakeObj.length; c++){
                
            if(c > 0){
                //temp position, follow children
                var tmpPosX = me.snakeObj[c]['x'];
                var tmpPosY = me.snakeObj[c]['y'];
                
                me.snakeObj[c]['x'] = me.posX;
                me.snakeObj[c]['y'] = me.posY;
                
                me.posX = tmpPosX;
                me.posY = tmpPosY;                   
            }else{
                me.posX = me.snakeObj[c]['x'];
                me.posY = me.snakeObj[c]['y'];                
                
                switch(me.direction){
                    case LEFT_WAY  : me.snakeObj[c]['x'] = me.snakeObj[c]['x'] - me.RSS;
                        break;

                    case DOWN_WAY  : me.snakeObj[c]['y'] = me.snakeObj[c]['y'] + me.RSS;
                        break;

                    case RIGHT_WAY : me.snakeObj[c]['x'] = me.snakeObj[c]['x'] + me.RSS;
                        break;

                    case UP_WAY    : me.snakeObj[c]['y'] = me.snakeObj[c]['y'] - me.RSS;
                        break;                        
                }
            }
            me.ctx.drawImage(me.mS,me.sourceX,0, me.BCS, me.BCS, me.snakeObj[c].x, me.snakeObj[c].y , me.RSS, me.RSS);
        }
        
        me.checkCollision();
    }
    
    this.moveLeft = function(){
        if(me.direction == RIGHT_WAY) return; //oposite way not allowed
        me.direction = LEFT_WAY;
        this.goMove();
    }
    
    this.moveDown = function(){
        if(me.direction == UP_WAY) return; //oposite way not allowed
        me.direction = DOWN_WAY;
        this.goMove();
    }

    this.moveRight = function(){
        if(me.direction == LEFT_WAY) return; //oposite way not allowed
        me.direction = RIGHT_WAY;
        this.goMove();
    }
    
    this.moveUp = function(){
        if(me.direction == DOWN_WAY) return; //oposite way not allowed
        me.direction = UP_WAY;
        this.goMove();
    }
    
    this.goMove = function(){
        me.moving = true;
        me.movingSnake(false);       
    }
    
    this.spriteEngine = function(){
        me.ctx.clearRect (  0, 0, 700, 500 );
        me.sourceX = Math.floor(me.aFrames[me.iFrame] % 9) * 30;
        me.sourceY = 0;
        
        for(var c = 0; c < me.snakeObj.length; c++){
            me.ctx.drawImage(me.mS, me.sourceX,0, me.BCS, me.BCS,me.snakeObj[c].x, me.snakeObj[c].y, me.RSS, me.RSS);
        }
        me.iFrame++;
        if(me.iFrame  ==  me.aFrames.length) me.iFrame=1;          
    }
    
    this.checkCollision = function(){
        for(var h = 1; h < me.snakeObj.length; h++){
            if(me.snakeObj[0].x == me.snakeObj[h].x && 
                me.snakeObj[0].y == me.snakeObj[h].y || me.snakeObj[0].y < 70 || me.snakeObj[0].y > 350){
                me.collision = true;
                c = h = me.snakeObj.length;
                console.info("collision");
            }
        }
    }
    
    this.init(config);
}