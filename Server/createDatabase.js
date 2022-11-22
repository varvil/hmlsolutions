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
    (id INTEGER PRIMARY KEY AUTOINCREMENT, username text not null, email text not null, password text not null)
    `)
};

app.listen(5000, () => {
    console.log('Server is up on port 5000');
});