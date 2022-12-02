<?php
include 'index.php';

header("Content-type:application/json");

if (isset($_GET['id']) && $_GET['id']!="") {
	$db = new SQLite3('tietokanta.db');
	$result = $db->query('SELECT * FROM autot WHERE id = '.$_GET["id"]);
	$rows = count($result);
	if($rows>0) {
		$stmt = $db->prepare("DELETE FROM autot WHERE id='".$_GET["id"]."'");
		$stmt->bindValue($_GET["id"], $id, SQLITE3_INTEGER);
		$result = $stmt->execute();	
		header("location: get_all.php");
	}else{
		response(NULL, NULL, 200,"No Record Found");
	}
	}else{
		response(NULL, NULL, 400,"Invalid Request");
	}
?>