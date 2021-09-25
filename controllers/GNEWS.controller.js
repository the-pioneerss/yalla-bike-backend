'use strict'

const finaly=require('../modles/GNEWS.model');
const axios=require('axios');

let handlearticls= async (req,res)=>{
    let country=req.query.country
    let url=`https://gnews.io/api/v4/search?q="pollution in ${country}"&token=${process.env.GNEWS_API_KEY}`
    let axiosres= await axios.get(url);
    let midres= axiosres.data.articles;   
    let finalres= midres.map((item)=>{
        return  new finaly(item);
            
        })
    res.status(200).json(finalres);
    
}

module.exports=handlearticls;