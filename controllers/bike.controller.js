"use strict";
const {bikeModel}=require('../models/bike.model');
const axios = require("axios");

let handelBike = async (req, res) => {
    let url = `http://api.citybik.es/v2/networks`;
    let axiosResponse = await axios.get(url);
    let bikeData = axiosResponse.data.networks;
    let cleanData = bikeData.map(item => {
        return new bikeModel(
            item.name,
            item.company,
            item.id,
            item.location.city,
            item.location.country,
            item.location.latitude,
            item.location.longitude);
    })
    res.status(200).json(cleanData);
}


module.exports={
    handelBike
}