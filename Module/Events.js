const mongoose = require("mongoose");

// Creating mongoose Schema
const EventsSchema = new mongoose.Schema({
    title: String,
    availability: Boolean,
    details: String,
    place: String,
    date: {}
});

// creating mongoose model using the above schema
const Event = mongoose.model("Event", EventsSchema);

module.exports = Event;