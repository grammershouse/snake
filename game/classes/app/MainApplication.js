if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.MainApplication = function(config){
    
    var me = this;
    this.ctx = null;
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
        document.addEventListener("keyup",me.eventKeyUp, true);        
    }
    
    this.initializerApp = function(){
        if (!this.canvasSupport()) return; 
        
        this.moveSnake = new Snake.MoveSnake({ctx : this.ctx});
        this.FoodBehavior = new Snake.FoodBehavior({ctx : this.ctx});
        

//                var ambientLight = .1;
//                var intensity = 1;
//                var radius = 40;
//                var amb = 'rgba(0,0,0,' + (1-ambientLight) + ')';    
//
//                var g = ctx.createRadialGradient(40+x, 40, 0, 40+x, 40, radius);
//                g.addColorStop(1, 'rgba(0,0,0,' + (1-intensity) + ')');
//                g.addColorStop(0, amb);
//                ctx.fillStyle = g;
//                ctx.fillRect(x, 0, 80, 80);
//
//                ctx.fillStyle = amb;
//                ctx.globalCompositeOperation = 'xor';
//                ctx.fillRect(0,0,800,500);
//                ctx.globalCompositeOperation = 'source-over';

                
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
         }
     }    
    
    this.init();
}