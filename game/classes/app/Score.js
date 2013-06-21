if(typeof(Snake)=="undefined"){var Snake = {} };

Snake.Score = function(config){
    
    var me = this;
    var score = 0000000;    
    this.xScore = XCORE;
    
    this.init = function(){
        me.ctx = config.ctx;
        me.main = config.main;        
    }
    
    this.openScorePopup = function(){
        $("#final_score").text(score);
        $( "#hscore" ).dialog( "open" );
    }
    
    this.saveScore = function(){
        var player_name = $("#player_name").val();
        player_name = (player_name.length > 0) ? player_name : "player";
        
        $.ajax({
            type: "POST",
            url: "game/scripts/scoreEngine.php",
            data: { method : "save", name: player_name, score: score }
        }).done(function( msg ) {
            $( "#hscore" ).dialog( "close" );
            me.resetScore();
            me.main.moveSnake.initSnake();
            me.setHighScores();
        }); 
        
        $( "#hscore" ).dialog( "close" );
    }
    
   this.updateScore = function(){
        score = (score) + (50 * me.xScore);
        $(".scorePopup").text("+" + (me.xScore*50)); 
        
        //score animation
        $(".boxScorePopup").show();
        $(".boxScorePopup").animate({
           opacity: 0.4,
           top : "250px"
         }, 300,
           function() {
                $(".boxScorePopup").hide().css({
                    opacity : 0.8,
                    top : "300px"
                });
             } 
         );        
        
        var showScore = String(score);
        var cntScore = showScore.length;
        var loopZeros = 7 - cntScore;
        
        for(var k=0; k<loopZeros; k++) 
            showScore = "0" + showScore;
        
        me.ctx.fillStyle = '#FFF';
        me.ctx.font = 'italic bold 30px Lemon';
        me.ctx.clearRect(550, 40, 300,40);
        me.ctx.fillText(showScore, 590, 65); 
        
        me.xScore = XCORE;
    }
    
    this.resetScore = function(){
        score = 0;
        me.ctx.fillStyle = '#FFF';
        me.ctx.font = 'italic bold 30px Lemon';
        me.ctx.clearRect(550, 40, 300,40);
        me.ctx.fillText("0000000", 590, 65); 
    }

    this.getScore = function(){
        return score;
    }
    
    this.setHighScores = function(){
        $.ajax({
            type: "POST",
            url: "game/scripts/scoreEngine.php",
            data: { method : "get" }
        }).done(function( scores ) {
            
            var sc = scores.split("|");
            
            me.ctx.fillStyle = '#FFF';
            for(var v=0; v<sc.length; v++){
                var data = sc[v].split("-");
                me.ctx.font = 'italic bold 25px arial'; 
                
                switch(v){
                    case 0 : me.ctx.clearRect(0, 185, 180,40);
                             me.ctx.fillText("0" + data[1], 40, 225);
                             me.ctx.font = 'italic bold 16px arial'; 
                             me.ctx.clearRect(0, 225, 180,40);
                             me.ctx.fillText(data[0], 40, 249);
                        break;

                    case 1 : me.ctx.clearRect(0, 370, 180,40);
                             me.ctx.fillText("0" + data[1], 40, 395);
                             me.ctx.font = 'italic bold 16px arial'; 
                             me.ctx.clearRect(0, 395, 180,40);
                             me.ctx.fillText(data[0], 40, 419);
                        break;

                    case 2 : me.ctx.clearRect(0, 540, 180,40);
                             me.ctx.fillText("0" + data[1], 40, 562);
                             me.ctx.font = 'italic bold 16px arial'; 
                             me.ctx.clearRect(0, 570, 180,40);
                             me.ctx.fillText(data[0], 40, 587);
                        break;

                    case 3 : me.ctx.clearRect(760, 260, 180,40);
                             me.ctx.fillText("0" + data[1], 794, 285);
                             me.ctx.font = 'italic bold 16px arial'; 
                             me.ctx.clearRect(760, 290, 180,40);
                             me.ctx.fillText(data[0], 794, 307);
                        break;
                        
                    case 4 : me.ctx.clearRect(760, 440, 180,40);
                             me.ctx.fillText("0" + data[1], 794, 460);
                             me.ctx.font = 'italic bold 16px arial'; 
                             me.ctx.clearRect(760, 470, 180,40);
                             me.ctx.fillText(data[0], 794, 485);
                        break;
                }
            }
            
                         
            
        });        
    }
    
    this.init();
}