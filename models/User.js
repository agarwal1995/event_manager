const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
const Schema = mongoose.Schema;

//const users = mongoose.model;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
