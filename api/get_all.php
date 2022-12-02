<?php
include 'index.php';

header("Content-type:application/json");

	$db = new SQLite3('tietokanta.db');
	$result = $db->query('SELECT * FROM autot');
	$rows = count($result);
	if($rows>0) {
		$response = [];
		while ($row = $result->fetchArray()) {
			$response[] = array('id' =>$row['id'], 'nimi' =>$row['nimi'], 'hinta' =>$row['hinta'], 'description' => $row['description']);
		}
		$response = json_encode($response);
		echo $response;
	}
?>