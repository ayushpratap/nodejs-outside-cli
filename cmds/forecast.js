"use-strict";

const ora = require("ora");
const getForecast = require("../utils/5-days-forecast");
const helper = require("../utils/helpers");

module.exports = async args => {
    //  Check for location validation
    if(helper.checkLocationInput(args)){
        const location = args.l || args.location;
        const spinner = ora().start();
        try{
            const forecast = await getForecast(location);
            spinner.stop();
            if(forecast){
                console.log(`Forecast of ${location} for next 5 days is gonna be:`);
                console.log(`\tDate-Time\t\tTemperature\tGonna feel like\t\tDAY`);
                forecast.forEach(item => {
                    //  Get the day
                    const day = helper.getDayOfWeek(item.dt);
                    
                    //  Get temp
                    const temp = helper.round(item.main.temp);
                    
                    //  Get feels_like
                    const feels_like = helper.round(item.main.feels_like);
                    
                    //  Get date time
                    const dateTime = item.dt_txt;
                    
                    console.log(`\t${dateTime}\t${temp}°\t\t${feels_like}°\t\t\t${day}`);
                });
            }
        }catch(err){
            spinner.stop();
            console.error(err);
        }
    }else{
        require("./help")(args);
    }
};