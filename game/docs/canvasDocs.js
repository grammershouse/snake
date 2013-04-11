//Documentacion guia rapida    
    
    //background
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 800, 500);
    //text
    context.fillStyle = "#ff00aa";
    context.font = "20px _sans";
    context.textBaseline = "top";
    context.fillText ("Hello World!", 5, 200 );
    //box
    context.strokeStyle = "#000000";
    context.strokeRect(5, 5, 490, 290);  
    
    //background image
    var woodBg = new Image();
    woodBg.src = "images/backgrounds/woodBg.jpg";
    woodBg.onload = function(){
        context.drawImage(woodBg, 0, 0); //path and pos x, y
    }   
    
    http://www.w3schools.com/tags/ref_canvas.asp
http://blog.sklambert.com/html5-canvas-game-panning-a-background/
http://net.tutsplus.com/tutorials/html-css-techniques/build-your-first-game-with-html5/



















<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Snake v1.0 </title>
        <script src="classes/libs/modernizr-latest.js"></script>
        <script src="classes/app/MainApplication.js"></script>
        <script type="text/javascript">
            
        window.addEventListener("load", eventWindowLoaded, false);  
        var Debugger = function () { };
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
        
        function eventWindowLoaded () {
            canvasApp();
        }
        
        function canvasSupport () {
            return Modernizr.canvas;
        }
        
        function canvasApp () {
            
            if (!canvasSupport()) {
                return;
            }

            var theCanvas = document.getElementById("canvasOne");
            var context = theCanvas.getContext("2d");
            var counter = 0;
            var c = new Image();
            c.src = "images/sprites/Flame.png";
                          c.addEventListener("load", eventLoadBGSprite, false);

            function drawScreen() {

                setInterval(function(){ 

                    context.clearRect (  0, 0, 800, 500 );
                    //box
                    context.fillStyle = "rgba(0, 0, 0, 0)";
                    context.fillRect(0, 0, 800, 500);
                    
                    var sourceX = animationFrames['flame'][frameIndex]['x'];
                    var sourceY = animationFrames['flame'][frameIndex]['y'];
                    
                    x = x+8;
                    
                    context.drawImage(c,sourceX,sourceY,32,24,x,50,45,45);
                    context.drawImage(c,sourceX,sourceY,32,24,x-15,50,45,45);
                    context.drawImage(c,sourceX,sourceY,32,24,x-30,50,45,45);
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
</script>        
        
        
    </head>
    <body>
       <div style="position: absolute; top: 10px; left: 250px; background-image: url(images/backgrounds/woodBg.jpg)">
        <canvas id="canvasOne" width="800" height="500">
        Your browser does not support HTML5 Canvas.
        </canvas>
       </div>
    </body>
</html>
