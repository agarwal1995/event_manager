const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "events works" }));

//Load Events Module
const Event = require("../../models/Event");

// @route   Get api/users/create
// @desc    Create Event
// @access  Public

router.post("/create", (req, res) => {
  Event.findOne({ id: req.body.id }).then(event => {
    if (event) {
      return res.status(400).json({ id: "Event Id Already Exists" });
    } else {
      const newEvent = new Event({
        id: req.body.id,
        eventname: req.body.eventname,
        location: req.body.location,
        date: req.body.date,
        description: req.body.description
      });

      newEvent
        .save()
        .then(event => res.json(event))
        .catch(err => console.log(err));
    }
  });
});

router.post("/update", (req, res) => {
  Event.findOne({ id: req.body.id }).then(event => {
    if (!event) {
      return res.status(404).json({ id: " Event Id Does not Exist" });
    } else {
      Event.findOneAndUpdate(
        { id: req.body.id },
        {
          $set: {
            eventname: req.body.eventname,
            location: req.body.location,
            date: req.body.date,
            description: req.body.description
          }
        },
        { new: true }
      ).then(event => res.json(event));
    }
  });
});

router.get("/", (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventfound: " Bo Event Found" }));
});

router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: " Event Not Found" }));
});

router.delete("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event
        .remove()
        .then(() => res.json({ success: "true" }))
        .catch(err => res.json(err));
    })
    .catch(err => res.status(404).json({ notfound: " Event Not Found " }));
});

module.exports = router;
