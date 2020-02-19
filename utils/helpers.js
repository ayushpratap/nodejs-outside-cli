"use-strict";

//  Create an object for mapping of days to numbers
let DAYS = {};
DAYS[0] = "Sunday";
DAYS[1] = "Monday";
DAYS[2] = "Tuesday";
DAYS[3] = "Wednesday";
DAYS[4] = "Thursday";
DAYS[5] = "Friday";
DAYS[6] = "Saturday";


module.exports.getDayOfWeek = unix_timestamp => {
    let date = new Date(unix_timestamp * 1000);
    return DAYS[date.getDay()];
};

module.exports.round = value => {
    value = value - 273.15;
  return Number(Math.round(value+'e'+2)+'e-'+2);
};

module.exports.checkLocationInput = args => {
    let location = args.l || args.location;
    
    //  Check the type of location argument passed on cli
    
    //  Making sure the input is string
    if(typeof location === 'string'){
        //  If input is string, check if it is not empty
        location = location.trim();
        if(location.length > 0){
            return true;
        }
    }else{
        return false;
    }
};

module.exports.tConvert = time => {
    // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
};

module.exports.API_KEY = "88f464005d23075e52085f3a7363b643";