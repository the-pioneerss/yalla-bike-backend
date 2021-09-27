'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const axios = require('axios');
const PORT=process.env.PORT;
const handlearticls=require('./controllers/GNEWS.controller');
app.use(express.json());
const ATLAS=process.env.ATLAS
const { rentController,createBikeController,deleteBikeController } = require("./controllers/Rents.controller");
const mongoose = require("mongoose");
mongoose.connect(`http://${ATLAS}`,{useNewUrlParser: true, useUnifiedTopology: true});


const {handelBike}=require('./controller/bike.controller');
const{bikeModel}=require('./model/bike.model');


app.get('/articls',handlearticls);
app.get('/bike', handelBike);
app.get('/bikes',rentController)
app.post('/create',createBikeController)
app.delete('/delete/:id',deleteBikeController);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });



//const ATLAS=process.env.ATLAS
//const { rentController,createBikeController,deleteBikeController } = require("./controllers/Rents.controller");
// app.get('/', (req, res) => {
//     res.status(200).json({ "message": "iam working" })
// });