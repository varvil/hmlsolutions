<?php
header('Access-Control-ALlow-Origin: *');

require_once('./database/database.php');
$tableName = 'items';
$path = './database.db';

createTable('./database.db', "
     $tableName (id integer primary key, name text, price integer);
");

// insertIntoDatabase(
//     $path,
//     '
// INSERT INTO ' . $tableName . '(entry) VALUES("this is a test");'
// );

$rows = selectFromDatabase($path, "SELECT * FROM $tableName");
$diaryEntries = [];
if (count($rows) > 0) {
    foreach ($rows as $row => $value) {
        array_push($diaryEntries, $value);
    }
    echo json_encode($diaryEntries);
}