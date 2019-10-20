const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");

const Event = mongoose.model("events");

module.exports = app => {
  app.get("/api/events", async (req, res) => {
    const events = await Event.find({});
    res.send(events);
  });

  app.post("/api/events", async (req, res) => {
    const { name, description, department, duration, date, room } = req.body;

    const event = new Event({
      name,
      description,
      department,
      duration,
      date,
      room
    });

    try {
      await event.save();
      res.send(event);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
