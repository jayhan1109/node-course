const axios = require("axios");
const chalk = require("chalk");

// const url =
//   "http://api.weatherstack.com/current?access_key=823edba82f442452de9b543ac494d3b8&query=37.8267,-122.4233&units=f";

// const getData = async () => {
//   try {
//     const res = await axios(url);
//     const data = res.data;
//     const currentData = data.current;
//     const blueChalk = chalk.blue;
//     console.log(
//       blueChalk(currentData.weather_descriptions[0]) +
//         ". It is currently " +
//         blueChalk(currentData.temperature) +
//         " degrees out. It feels like " +
//         blueChalk(currentData.feelslike) +
//         " degrees out.(Fahrenheit)"
//     );
//   } catch (err) {
//     console.log("Unable to connect to weather service ...");
//   }
// };

// getData();

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVuZ2hvMTEwOSIsImEiOiJjazM0cHNyeHUxMGdqM2xtbTRrZ3pibmswIn0.gCCxyZynz433ySA_OxEu9w&limit=1";

const getData = async () => {
  try {
    const res = await axios(url);
    const data = res.data;

    if (data.features.length === 0) {
      console.log("Unable to find location. Try Again");
    } else {
      const featureData = data.features[0];
      const greenChalk = chalk.green;
      console.log(
        "latitude: " +
          greenChalk(featureData.center[1]) +
          ", longitude: " +
          greenChalk(featureData.center[0])
      );
    }
  } catch (err) {
    console.log("Unable to connect to weather service ...");
  }
};

getData();
