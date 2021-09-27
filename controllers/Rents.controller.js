"use strict";
const { rentModel, seedBike } = require("../models/Rents.models");

let rentController = (req, res) => {
//   seedBike(); // uncomment when clearing the data base (use once then uncomment)
  rentModel.find({}).then((data) => {
    res.json(data);
  });
};

let iconsMale = [
    "https://images.vexels.com/media/users/3/206295/isolated/preview/bf7731bb87b58f8a862172acfd38f3db-young-man-pointing-character.png",
    "https://images.vexels.com/media/users/3/209042/isolated/preview/bb369786a8601502fb10cd9161eb34ec-standing-beared-man-character.png",
    "https://images.vexels.com/media/users/3/199963/isolated/preview/08f03b340a63ff54d61cb709e4b57d07-guy-with-tablet-character-isometric.png",
    "https://images.vexels.com/media/users/3/200032/isolated/preview/27fed3d8643bf55333a148ef25418288-old-man-character-isometric.png",
  ];
  
  let iconsFemale = [
    "https://images.vexels.com/media/users/3/206055/isolated/preview/29cafa4778571aed00dabc96869d481a-greeting-woman-character.png",
    "https://images.vexels.com/media/users/3/193082/isolated/lists/9b3fd0d5985b90d4fceb21dc7cbe5069-covid-19-girl-mask-character.png",
    "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
    "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
  ];
  
  function Rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const createBikeController = async (req, res) => {
  let { username, location, gender,image,Phone } = req.body;
  if(gender==="Male"){
  let newBike = new rentModel({
    username: username,
    location: location,
    gender: gender,
    image: (iconsMale)[Rand(0,3)] ,
    Phone:Phone
  });
  newBike.save();
  } else if(gender==="Female"){
    let newBike = new rentModel({
        username: username,
        location: location,
        gender: gender,
        image: (iconsFemale)[Rand(0,3)] ,
        Phone:Phone
      });
      newBike.save();
  }
//   newBike.save();

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
