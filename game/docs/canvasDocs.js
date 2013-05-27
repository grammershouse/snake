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
    
    
    //sounds
    http://www.createjs.com/Docs/SoundJS/classes/HTMLAudioPlugin.html
    http://downloads.khinsider.com/game-soundtracks/browse/S
    
            //source
        //pos img x
        ////pos img y
        //cut image x
        //cut image y
        //position in canvas x
        //position in canvas y
        //resize x
        //resize y
        
        
        
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
    
    http://www.w3schools.com/tags/ref_canvas.asp
http://blog.sklambert.com/html5-canvas-game-panning-a-background/
http://net.tutsplus.com/tutorials/html-css-techniques/build-your-first-game-with-html5/
http://msdn.microsoft.com/es-co/library/windows/apps/hh465791.aspx

http://stackoverflow.com/questions/7909865/canvas-fill-a-rectangle-in-all-areas-that-are-fully-transparent/7916842#7916842
http://stackoverflow.com/questions/10396991/clearing-circular-regions-from-html5-canvas
https://developer.mozilla.org/samples/canvas-tutorial/6_1_canvas_composite.html

















