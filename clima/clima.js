const axios = require('axios');
const fTemp = require('../config/Format-Temp.json')
const apiKey = require('../config/apiKey.json');

const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${fTemp.Celsius}&appid=${apiKey.openweather}`);

    let main = resp.data.main;

    return {
        temp: main.temp,
        tempMax: main.temp_max,
        tempMin: main.temp_min,
        Humedad: main.humidity
    }


}

module.exports = {
    getClima
}