var axios = require('axios');


// 06a05a4e297ccc312e2ccf3cb6f9b2ec
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=06a05a4e297ccc312e2ccf3cb6f9b2ec&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
