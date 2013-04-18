if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.Constants = function(config){
    
    this.init = function(){
        IMAGES_PATH = "game/media/images/";
        RIGHT_WAY   = "right";
        LEFT_WAY    = "left";
        DOWN_WAY    = "down";
        UP_WAY      = "up";
    }
    
    this.init();
}