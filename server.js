
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT 
const mongoose=require("mongoose");
const ATLAS=process.env.ATLAS
const { rentController,createBikeController,deleteBikeController } = require("./controllers/Rents.controller");

mongoose.connect(`http://${ATLAS}`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/bikes',rentController)
app.post('/create',createBikeController)
app.delete('/delete/:id',deleteBikeController);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
=======
"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
app.use(cors());
const {handelBike}=require('./controller/bike.controller');
const{bikeModel}=require('./model/bike.model');
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(`${MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });



// app.get('/', (req, res) => {
//     res.status(200).json({ "message": "iam working" })
// });



app.get('/bike', handelBike);



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})



