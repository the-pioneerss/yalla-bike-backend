'use strict';

const weatherModel = require('../model/weather.model')
const axios =require("axios");


let handelWeather=async(req, res) =>{
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=b7ad9641461c4333a29e6d706eeabbb6`;
    console.log(url);
    let respons = await axios.get(url);
    let weatherData = respons.data;
    let cleanedData = weatherData.data.map((item) => {
        return new weatherModel(item.datetime, item.weather.description);
    });
    res.status(200).json(cleanedData)
}




module.exports={
    handelWeather};