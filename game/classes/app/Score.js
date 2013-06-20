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
            url: "game/scripts/saveScore.php",
            data: { name: player_name, score: score }
        }).done(function( msg ) {
            $( "#hscore" ).dialog( "close" );
            me.resetScore();
        }); 
        
        $( "#hscore" ).dialog( "close" );
    }
    
   this.updateScore = function(){
         console.info(me.xScore);
        score = (score) + (50 * me.xScore);
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
    
    this.init();
}