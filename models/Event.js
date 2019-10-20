const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  description: String,
  department: String,
  duration: String,
  date: String,
  room: String
});

mongoose.model("events", eventSchema);
