const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//connect to database
const db = new sqlite3.Database("testidb.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("conneted to the inmemory SQlite database");
});

//add user to database
app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.run(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

// add item to database
app.post("/add", (req, res) => {
  const itemname = req.body.itemname;
  const price = req.body.price;
  const description = req.body.description;

  db.run(
    "INSERT INTO items (itemname, price, description) VALUES (?, ?, ?)",
    [itemname, price, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

//fetch items from database
app.get("/api/items", (req, res) => {
  const sql = "SELECT * FROM items";

  db.all(sql, (err, result) => {
    res.send(result)
  })
});

app.listen(5000, () => {
  console.log("Server is up on port 5000");
});
