<?php
$data = $_POST;
$file = 'bestScores.txt';
$oldScores = json_decode(file_get_contents($file), true);

if($data["method"] == "save"){
    $playerName = $data["name"];
    $currentScore = "score_" . intval($data["score"]);

    $codeScores = array(
        $currentScore => array("playerName" => $playerName, "score" => intval($data["score"]))
    );

    $joinScores = is_array($oldScores) ? json_encode(array_merge($oldScores, $codeScores)) : json_encode($codeScores);
    file_put_contents($file, $joinScores);    
}

if($data["method"] == "get"){
    
function sortArray($a, $b) {
    if ($a["score"] == $b["score"]) {
        return 0;
    }
    return ($a["score"] < $b["score"]) ? 1 : -1;
}

uasort($oldScores, 'sortArray');
    $bk = 0;
    $scores = "";
    foreach($oldScores as $sc){
        if($bk < 5){
            $scores .= $sc["playerName"] . "-" . $sc["score"] . "|";             
        }else{
            break;
        }
        $bk++;
    }
    echo $scores; 
}
?>