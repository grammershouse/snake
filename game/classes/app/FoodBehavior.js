if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.FoodBehavior = function(config){
    
    var me = this;
    
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
    }    
    
    
    this.animateFood = function(auto){
        //source
        //pos img x
        ////pos img y
        //cut image x
        //cut image y
        //position in canvas x
        //position in canvas y
        //resize x
        //resize y
        me.ctx.drawImage(me.mS, 400, 0, 30, 30, 50, 100 , 25, 25);
        
    }    
    
    
    this.init();
}