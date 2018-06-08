const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const events = require("./routes/api/events");

const app = express();

// DB Config

const db = require("./config/keys").mongoURI;

//Connect
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello hgf"));

app.use("/api/users", users);
app.use("/api/events", events);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running "));
