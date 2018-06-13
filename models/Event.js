const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
const Schema = mongoose.Schema;

//Create Schema

const EventSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  eventname: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    require: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model("events", EventSchema);
