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