const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');


app.use(cors());
app.use(express.json());

//connect to database
const db = new sqlite3.Database('testidb.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('conneted to the inmemory SQlite database');
});


//add user to database
app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted");
        }
    }
    );
});

app.listen(5000, () => {
    console.log('Server is up on port 5000');
});