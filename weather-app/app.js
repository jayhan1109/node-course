const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];
if (!location) {
  return console.log("Provide a location");
} else {
  geocode(location, (err, data) => {
    if (err) {
      return console.log(err);
    }

    forecast(data.latitude, data.longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
