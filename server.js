'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const axios = require('axios');
const PORT=process.env.PORT;
const handlearticls=require('./controllers/GNEWS.controller');



app.get('/articls',handlearticls);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });
