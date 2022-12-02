<?php

include 'index.php';

	$db = new SQLite3('tietokanta.db');
	$db->exec("UPDATE autot SET nimi='".$_POST["nimi"]."', hinta='".$_POST["hinta"]."', description='".$_POST["description"]."' WHERE id='".$_POST["id"]."'");
	header("location: get_all.php");
?>