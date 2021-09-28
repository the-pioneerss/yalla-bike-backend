"use strict";
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  location: String,
  time: String,
  generalInfo: String,
  description: String,
  eventsDate: String
});

const eventModel = mongoose.model("event", eventSchema);

let seedEvent = () => {
  let eventList = new eventModel({
    eventName: "Spring Road Trip",
    location: "Irbid",
    time: "12:00 pm",
    generalInfo: "IF YOU'RE 40's, THIS IS FOR YOU!",
    description:
      "A long-distance journey on the road. Typically, road trips are long distances traveled by automobile..",
      eventsDate:"October 1st"
  });

  let eventList2 = new eventModel({
    eventName: "Morning Road Trip",
    location: "Amman",
    time: "8:00 am",
    generalInfo: "Daily morning trip to explore Amman",
    description:
      "A Downtown trip to explore the essence of Amman ",
    eventsDate:"October 1st"
  });

  eventList.save();
  eventList2.save();
};

module.exports = {
    eventModel,
    seedEvent,
};
