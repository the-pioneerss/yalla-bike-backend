'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT=process.env.PORT;
app.use(express.json());
const ATLAS=process.env.ATLAS
const mongoose = require("mongoose");

const handlearticls=require('./controllers/GNEWS.controller');
const {handelWeather}=require('./controllers/weather.controller');
const {rentController,createBikeController,deleteBikeController    }=require("./controllers/Rents.controller");
const {eventController,createEventController,deleteEventController }=require("./controllers/Events.controller")


mongoose.connect(`http://${ATLAS}`,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/articls',handlearticls);
app.get('/weather',handelWeather);

// Rent Page
app.get('/bikes',rentController);
app.post('/create',createBikeController);
app.delete('/delete/:id',deleteBikeController);

// Event Page
app.get('/events',eventController);
app.post('/createEvent',createEventController);
app.delete('/deleteEvent/:id',deleteEventController);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });





