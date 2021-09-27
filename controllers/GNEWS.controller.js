'use strict'

const finaly=require('../modles/GNEWS.model');
const axios=require('axios');
const Cache = require('../helper/cacth');
let cache = new Cache();

let handlearticls= async (req,res)=>{
        let newDate = new Date();
        if (cache.data.length > 0 && cache.date.getDate() === newDate.getDate()) {
            res.status(200).json({ cache });
        } else {

    let url=`https://gnews.io/api/v4/search?q=pollution&lang=en&max=4&token=${process.env.GNEWS_API_KEY}`
    let axiosres= await axios.get(url) ;
    let midres= axiosres.data.articles ;   
    let finalres= midres.map((item)=>{
        return  new finaly(item);
        })
        cache.data = finalres;
        cache.date = newDate;
    res.status(200).json(finalres);
    
}}
module.exports=handlearticls;

