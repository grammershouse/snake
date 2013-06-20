<?php
$data = $_POST;

$file = 'bestScores.txt';
$playerName = $data["name"];
$oldScores = json_decode(file_get_contents($file), true);
$currentScore = "score_" . intval($data["score"]);

$codeScores = array(
    $currentScore => array("playerName" => $playerName, "score" => intval($data["score"]))
);

$joinScores = is_array($oldScores) ? json_encode(array_merge($oldScores, $codeScores)) : json_encode($codeScores);
file_put_contents($file, $joinScores);

?>