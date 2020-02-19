"use-strict";

const axios = require("axios");
const helper = require("./helpers");

module.exports = async location => {
    try{
        const results = await axios({
            method: 'get',
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            params:{
                q: location,
                mode: 'json',
                appid: helper.API_KEY
            }
        });
        return results.data.list;
    }catch(err){
        console.error(err);
    }
};