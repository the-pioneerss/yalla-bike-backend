"use strict";
const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
  username: String,
  location: String,
  gender: String,
  image: String,
  Phone: String,
});

const rentModel = mongoose.model("rent", rentSchema);

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

let seedBike = () => {
  let bikesList = new rentModel({
    username: "Yahya",
    location: "Irbid",
    gender: "Male",
    image: iconsMale[Rand(0, 3)],
    Phone: "0791231231"
  });

  let bikesList2 = new rentModel({
    username: "Yazan",
    location: "Zarqa",
    gender: "Male",
    image: iconsMale[Rand(0, 3)],
    Phone:"0793213213"
  });

  let bikesList3 = new rentModel({
    username: "Diala",
    location: "Amman",
    gender: "Female",
    image: iconsFemale[Rand(0, 3)],
    Phone:"07955443322"
  });

  let bikesList4 = new rentModel({
    username: "ashjan",
    location: "Aqaba",
    gender: "Female",
    image: iconsFemale[Rand(0, 3)],
    Phone:"0798654321"
  });

  bikesList.save();
  bikesList2.save();
  bikesList3.save();
  bikesList4.save();
};

module.exports = {
  rentModel,
  seedBike,
};
