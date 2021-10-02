const axios = require('axios');
require('dotenv').config();

const apiUrl = "https://api.lunarcrush.com/v2?data=assets&key="+ process.env.API_KEY +"&symbol=BTC";

axios.get(apiUrl)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });