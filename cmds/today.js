"use-strict";

const ora = require('ora');
const getWeather = require('../utils/weather');
const helper = require("../utils/helpers");

module.exports = async args => {
    let location = args.l || args.location;
    //  Check the type of location argumnet passed on cli
    if(typeof location === 'string'){
        location = location.trim();
        if(location.length >0 ){
            const spinner = ora().start();  
            try{
                const weather = await getWeather(location);
                spinner.stop();
                if(weather){
                    const temp = helper.round(weather.main.temp);
                    const feels_like = helper.round(weather.main.feels_like);
                    console.log(`Current conditions in ${location}:`);    
                    console.log(`\t${temp}° but feels like ${feels_like}°`);
                }
            }catch(err){
                spinner.stop();    
                console.error(err);
            }
        }else{
            require("./help")(args);
        }
    }else{
        require("./help")(args);
    }
};