// importing packages
const express = require("express");
const router = express.Router();

// importing the mongoose model
const Event = require("../Module/Events");

// get route to get all the data from the backend
router.get("/", (req, res) => {
    Event.find({}, (err, events) => {
        if (err) {
            console.log(err);
        } else {
            res.send(events);
        }
    })
})

module.exports = router;