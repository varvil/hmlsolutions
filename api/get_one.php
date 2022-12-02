<?php

include 'index.php';

header("Content-Type:application/json");
if (isset($_GET['id']) && $_GET['id']!="") {
	$db = new SQLite3('tietokanta.db');
	$result = $db->query('SELECT * FROM autot WHERE id = '.$_GET["id"]);
	$rows = count($result);
	if($rows>0) {
	while ($row = $result->fetchArray()) {
		$id = $row['id'];
		$nimi = $row['nimi'];
		$hinta = $row['hinta'];
		$description = $row['description'];
	}
	response($id, $nimi, $hinta, $description);
	}else{
		response(NULL, NULL, 200,"No Record Found");
	}
	}else{
		response(NULL, NULL, 400,"Invalid Request");
	}

function response($id,$nimi,$hinta,$description){
	$response['id'] = $id;
	$response['nimi'] = $nimi;
	$response['hinta'] = $hinta;
	$response['description'] = $description;
	
	$json_response = json_encode($response);
	echo $json_response;
}
?>