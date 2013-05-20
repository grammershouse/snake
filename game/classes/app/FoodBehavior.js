if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.FoodBehavior = function(config){
    
    var me = this;
    var posBX = 400;
    this.posX = 0;
    this.posY = 0;
    
    this.init = function(){
        me.ctx = config.ctx;
        me.mS = new Image(); //main sprite
        me.mS.src = IMAGES_PATH + "sprites/MainSprite.png";   
        this.start();
    }
    this.start = function(){
        //Interval to move snake
        setInterval(function(){
           me.animateFood(true);
        },300);
        
        this.generateRandomFood();
    }
    
    this.generateRandomFood = function(){
        this.posX = Math.floor(Math.random() * (625 - 25 + 1)) + 25; //625
        this.posY = Math.floor(Math.random() * (350 - 100 + 1)) + 70; //350
        
        this.posX = this.posX - (this.posX % 25);
        this.posY = this.posY - (this.posY % 25) + 25;
    }
    
    this.animateFood = function(auto){
        
        me.ctx.clearRect (  this.posX, this.posY, 25, 25 );
        
        posBX = posBX+ 32;
        if(posBX > 490) posBX = 400;
        me.ctx.drawImage(me.mS, posBX, 0, 30, 30, this.posX, this.posY , 25, 25);
        
    }    
    
    this.init();
}