"use-strict";

const axios = require('axios');
const helper = require("./helpers");

module.exports = async (location) => {
    try{
        const results = await axios({
            method: 'get',    
            url: 'https://api.openweathermap.org/data/2.5/weather',    
            params: {
                q: location,
                appid: helper.API_KEY
            }
        });  
        return results.data;
    }catch(err){
        console.log(err);
    }
};