const axios = require("axios");

const forecast = async (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=823edba82f442452de9b543ac494d3b8&query=${latitude},${longitude}&units=f`;

  try {
    const res = await axios(url);
    const data = res.data;
    const currentData = data.current;
    callback(
      undefined,
      currentData.weather_descriptions[0] +
        ". It is currently " +
        currentData.temperature +
        " degrees out. It feels like " +
        currentData.feelslike +
        " degrees out.(Fahrenheit)"
    );
  } catch (err) {
    callback("Unable to connect to weather service ...", undefined);
  }
};

module.exports = forecast;
