if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.MainApplication = function(config){
    
    var me = this;
    this.ctx = null;
    this.paused = true;
    this.moveSnake = null;
    
    this.init = function(config){
        new Snake.Constants();
        window.addEventListener("load", this.eventWindowLoaded(this), false); 
    };
    
    this.eventWindowLoaded = function(me){
        $(document).ready(function(){
            var canvas = document.getElementById("snakeCanvas");
            me.ctx = canvas.getContext("2d");
            me.addListeners(canvas);
            me.initializerApp();
        });
    };
    
    this.canvasSupport = function() {
        return Modernizr.canvas;
    };
    
    this.addListeners = function(canvas){
        console.info("Listeners Added");
        document.addEventListener("keydown",me.eventKeyUp, true);        
    }
    
    this.initializerApp = function(){
        if (!this.canvasSupport()) return; 
        
        me.moveSnake = new Snake.MoveSnake({ctx : this.ctx, main : this});
        me.FoodBehavior = new Snake.FoodBehavior({ctx : this.ctx, main : this});
        me.Score = new Snake.Score({ctx : this.ctx, main : this});
        
        $("#save_button").on("click",function(){
            me.Score.saveScore();
        })
        
        me.gameScore();
        
    }
    
    this.restartApp = function(){
        console.info("restart app");
        
        setTimeout(function(){
            me.moveSnake.initSnake();
            me.Score.openScorePopup();
        },500);
        
    }
    
    this.eventKeyUp = function(e){
         switch(e.keyCode){
             case 39 :
                 me.moveSnake.moveRight();
                 break;
                 
             case 40 :
                 me.moveSnake.moveDown();
                 break;

             case 37 :
                 me.moveSnake.moveLeft();
                 break;
                 
             case 38 :
                 me.moveSnake.moveUp();
                 break;   
                 
             case 13 :
                 me.gamePause();
                 break;                  
         }
     }  
     
     this.gameScore = function(){
        me.ctx.fillStyle = '#FFF';
        me.ctx.font = 'italic bold 30px Lemon';
        me.ctx.fillText('0000000', 610, 65); 
     }
     
     
     this.gamePause = function(){
         
        if(!me.paused){

            me.ctx.fillStyle= "#000000";
            me.ctx.globalAlpha=0.5; // Half opacity
            me.ctx.fillRect(157,300,608,40);
            
            me.ctx.globalAlpha=1; // Half opacity
            
            me.ctx.fillStyle = '#FFFFFF';
            me.ctx.font = 'italic bold 30px Lemon';
            me.ctx.fillText('PAUSE !', 400, 330); 
            
            me.ctx.save();
        }else{
            me.ctx.clearRect(157,300,608,40);
            me.ctx.restore();
        }
        
        me.paused = (me.paused) ? false : true;
     }
    
    this.init();
}