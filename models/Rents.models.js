"use strict";
const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
  username: String,
  location: String
});

const rentModel = mongoose.model("rent", rentSchema);

let seedBike = () => {
  let bikesList = new rentModel(
    {
        username: "Yahya",
        location: "Paris"
    }
  )
  
 let bikesList2 = new rentModel( 
      {
        username: "Yazan",
        location: "Moscow"
      }
     )

let bikesList3 = new rentModel( 
    {
    username: "Diala",
    location: "Madrid"
    }
  )     

  let bikesList4 = new rentModel( 
    {
    username: "ashjan",
    location: "Rome"
    }
  )   


  bikesList.save();
  bikesList2.save();
  bikesList3.save();
  bikesList4.save();


  }


module.exports={
    rentModel,
    seedBike
}