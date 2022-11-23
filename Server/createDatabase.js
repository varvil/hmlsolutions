const sqlite3 = require('sqlite3');
const express = require('express');

const app = express();

//connect to database
let db = new sqlite3.Database('tietokanta.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
    }
    console.log('connected to the SQlite database');
});

function createDatabase() {
    var newdb = new sqlite3.Database('testidb.db', (err) => {
        if (err) {
            console.log(err);
            exit(1);
        }
        console.log('creating table');
        createTables(newdb);
    });
}

function createTables(newdb) {
    newdb.exec (`
    create table users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, username text NOT NULL, email text NOT NULL, password text NOT NULL)
    `)
    newdb.exec (`
    create table items 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, itemname text NOT NULL, price INTEGER NOT NULL, description text NOT NULL, created text)
    `)
};

app.listen(5000, () => {
    console.log('Server is up on port 5000');
});