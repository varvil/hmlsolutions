<?php

include 'index.php';

$url = 'https://hmlsolutions.com/cloud13/project/api/update.php';

$_POST = json_decode(file_get_contents("php://input"),true);

$name = $_POST['name'];
$price = $_POST['price'];
$description = $_POST['description'];
$id = $_POST['id'];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$data = "id=$id&nimi=$name&hinta=$price&description=$description";

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$result = curl_exec($curl);
curl_close($curl);
header("location: get_all.php");
?>