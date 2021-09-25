"use strict";
const { rentModel, seedBike } = require("../models/Rents.models");

let rentController = (req, res) => {
//   seedBike(); // uncomment when clearing the data base (use once then uncomment)
  rentModel.find({}).then((data) => {
    res.json(data);
  });
};

const createBikeController = async (req, res) => {
  let { username, location } = req.body;
  let newBike = new rentModel({
    username: username,
    location: location,
  });

  newBike.save();

  let bikeList = await rentModel.find({});
  res.status(201).json(bikeList);
};

const deleteBikeController = (req, res) => {
  let id = req.params.id;
  rentModel.findByIdAndDelete(id, async (err, data) => {
    if (err) {
      res.status(500).send("an error occured");
    }
    let bikeList = await rentModel.find({});
    res.json(bikeList);
  });
};

module.exports = {
  rentController,
  createBikeController,
  deleteBikeController,
};
