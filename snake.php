<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Snake v1.0 </title>
        <link href='http://fonts.googleapis.com/css?family=Lemon' rel='stylesheet' type='text/css'>
        <script src="game/classes/libs/modernizr-latest.js"></script>
        <script src="game/classes/libs/jquery-1.9.1.min.js"></script>   
        <script src="game/classes/app/Constants.js"></script>
        <script src="game/classes/app/Score.js"></script>
        <script src="game/classes/app/MoveSnake.js"></script>
        <script src="game/classes/app/FoodBehavior.js"></script>
        <script src="game/classes/app/MainApplication.js"></script>
        <script type="text/javascript">new Snake.MainApplication();</script>
        
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        
        <style>
            button.ui-button-icon-only{
                display: none;
            }
            
            #dialog-form{
                height: 80px !important;
            }
            
            #final_score{
               padding-left: 35px;
               font-family: 'Lemon',sans-serif;
               color: #440000;
               font-size: 30px;
            }
        </style>

  
    <script>
        $(function() {
            $( "#hscore" ).dialog();
            $( "#hscore" ).dialog( "close" );
        });
    </script>
        
    </head>
    <body style="background-color: #000">
       <div style="position: absolute; top: 10px; left: 200px; background-image: url(game/media/images/backgrounds/original.png)">
        <canvas id="snakeCanvas" width="906" height="620">
        Your browser does not support HTML5 Canvas.
        </canvas>
       </div>
        
        <div id="hscore" title="High Score">
            <div style="padding : 20px 0px 10px 0px">
                <span id="final_score">000000</span>
            </div>
            
            <div id="dialog-form" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; max-height: none; height: 207px;">
                <label for="name">Name</label>
                <input type="text" name="player_name" id="player_name" class="text ui-widget-content ui-corner-all">
            </div>
            <button id="save_button" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false" style="margin-left:65px">
                <span class="ui-button-text" >Save score</span>
            </button>
        </div>
    </body>
</html>
