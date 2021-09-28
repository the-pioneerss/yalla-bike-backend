"use strict";
const { eventModel, seedEvent } = require("../models/Events.models");

let eventController = (req, res) => {
//   seedEvent(); // uncomment when clearing the data base (use once then uncomment)
eventModel.find({}).then((data) => {
    res.json(data);
  });
};

const createEventController = async (req, res) => {
  let { eventName, location, time,generalInfo,description,eventsDate } = req.body;
  
  let newEvent = new eventModel({
    eventName: eventName,
    location: location,
    time: time,
    generalInfo: generalInfo,
    description:description,
    eventsDate:eventsDate

  });
  newEvent.save();
  

  let eventList = await eventModel.find({});
  res.status(201).json(eventList);
};

const deleteEventController = (req, res) => {
  let id = req.params.id;
  eventModel.findByIdAndDelete(id, async (err, data) => {
    if (err) {
      res.status(500).send("an error occured");
    }
    let eventList = await eventModel.find({});
    res.json(eventList);
  });
};

module.exports = {
    eventController,
    createEventController,
  deleteEventController,
};
