const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const MongoClient = require("mongodb").MongoClient;
const users = require("./routes/api/users");
const events = require("./routes/api/events");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//const portt = process.env.PORT || 8080;

//Body Parser middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
// DB Config

/*
const mongoClient = require("mongodb").MongoClient,
  format = require("util").format;

const db = require("./config/keys").mongoclienturi;
MongoClient.connect(db)
  .then(() => console.log("MongoDB1 Connected"))
  .catch(err => console.log(err));
*/
/*function(err, db) {
    if (err) {
      throw err;
    } else {
      console.log("Connected");
    }
    db.close();
  }*/

var MongoClient = require("mongodb").MongoClient;
const db = require("./config/keys").mongoURI;
var uri =
  "mongodb+srv://raag:pass@cluster0-cpdh3.mongodb.net/test?retryWrites=true";
MongoClient.connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/*connect(
  uri,
  function(err, client) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  }
);*/
/*
const db = require("./config/keys").mongoURI;

//Connect
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
*/
app.get("/", (req, res) => res.send("Hello hgf"));

app.use("/api/users", users);
app.use("/api/events", events);

app.listen(port, () => console.log("Server running "));
