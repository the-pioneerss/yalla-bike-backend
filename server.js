"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(cors());
const {handelBike}=require('./controller/bike.controller');
const{bikeModel}=require('./model/bike.model');
const {handelWeather}=require('./controller/weather.controller');



// app.get('/', (req, res) => {
//     res.status(200).json({ "message": "iam working" })
// });



app.get('/bike', handelBike);
app.get('/weather',handelWeather);



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})


