if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.MainApplication = function(config){
    
    this.init = function(config){
        new Snake.Constants();
        window.addEventListener("load", this.eventWindowLoaded(this), false); 
        
    };
    
    this.eventWindowLoaded = function(tthis){
        setTimeout(function(){ tthis.initializerApp(); },100);
    };
    
    this.canvasSupport = function() {
        return Modernizr.canvas;
    };
    
    this.initializerApp = function(){
        if (!this.canvasSupport()) {
            return;
        }
        
        
  var frameIndex = 1;
        var x = 48;
        var y = 50;
        
        var animationFrames = {
            
            'flame' : {
                1 : {
                    'x' : 7,
                    'y' : 128
                },

                2 : {
                    'x' : 39,
                    'y' : 128
                },

                3 : {
                    'x' : 70,
                    'y' : 128
                }                
            }
            
        };        

        var canvas = document.getElementById("canvasOne");
        var cnx = canvas.getContext("2d");
        var counter = 0;
        var c = new Image();
        c.src = IMAGES_PATH + "sprites/MainSprite.png";
        c.addEventListener("load", eventLoadBGSprite, false);

        function drawScreen() {

            setInterval(function(){ 

                cnx.clearRect (  0, 0, 800, 500 );
                //box
                cnx.fillStyle = "rgba(0, 0, 0, 0)";
                cnx.fillRect(0, 0, 800, 500);

                var sourceX = animationFrames['flame'][frameIndex]['x'];
                var sourceY = animationFrames['flame'][frameIndex]['y'];

                x = x+8;

                cnx.drawImage(c,sourceX,sourceY,32,24,x,50,45,45);
                cnx.drawImage(c,sourceX,sourceY,32,24,x-15,50,45,45);
                cnx.drawImage(c,sourceX,sourceY,32,24,x-30,50,45,45);
                frameIndex++;
                if(frameIndex > 3) frameIndex = 1;
            },500);
        }

        function eventLoadBGSprite(){
            console.info("kk");
            drawScreen();
        }            

        window.addEventListener("keyup", eventKeyUp, true);

        function eventKeyUp(e){
            console.info(e.keyCode);
        }
        drawScreen();       
        
    }
    
    this.init();
}