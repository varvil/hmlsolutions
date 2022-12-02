<?php
include 'index.php';

header("Access-Control-Allow-Origin: *");
header("Content-type:application/json");

#https://www.hmlsolutions.com/cloud3/harkka6/api3/put_send.php

	$db = new SQLite3('tietokanta.db');
	$db->exec("INSERT INTO autot(nimi, hinta, description) VALUES('".$_POST["nimi"]."', '".$_POST["hinta"]."', '".$_POST["description"]."')");
	header("location: get_all.php");
?>