'use strict';

const weatherModel = require('../models/weather.model')
const axios =require("axios");


let handelWeather=async(req, res) =>{
    let city = req.query.city ;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=b60ecd2934aa4f368ac3ae5dbe352921`;
    console.log(url);
    let respons = await axios.get(url);
    let weatherData = respons.data;
    let cleanedData = weatherData.data.map((item) => {
        return new weatherModel(item.datetime, item.weather.description, item.low_temp, item.max_temp);
    });
    res.status(200).json(cleanedData)
}




module.exports={
    handelWeather};