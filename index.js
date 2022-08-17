// importing packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//importing routes
const eventRoutes = require("./Routes/event_routes");

// Setting the app and middlewares
const app = express();
app.use(cors()); //this will handle requests from the frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establishing connetion to the mongoDB database using mongoose
mongoose.connect("mongodb+srv://admin-shamila:19980216Shamila@cluster0.8zfkb.mongodb.net/mytickets");

// setting the "/events" routes
app.use("/events", eventRoutes);

// Setting up the port
app.listen(process.env.PORT || 3001, () => console.log("Server listening on port 3001 "));