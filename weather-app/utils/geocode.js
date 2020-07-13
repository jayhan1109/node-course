const axios = require("axios");

const geocode = async (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoianVuZ2hvMTEwOSIsImEiOiJjazM0cHNyeHUxMGdqM2xtbTRrZ3pibmswIn0.gCCxyZynz433ySA_OxEu9w&limit=1";

  try {
    const res = await axios.get(url);
    const data = res.data;

    if (data.features.length === 0) {
      callback("Unable to find location. Try Again", undefined);
    } else {
      const featureData = data.features[0];
      callback(undefined, {
        latitude: featureData.center[1],
        longitude: featureData.center[0],
        location: featureData.place_name,
      });
    }
  } catch (err) {
    callback("Unable to connect to location services ...", undefined);
  }
};

module.exports = geocode;
