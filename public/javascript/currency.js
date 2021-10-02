require('dotenv').config();
const axios = require('axios');

// fetch from lunar crush api the latest price of currency using its symbol
async function getPrice(currency) {

    try {
        const apiUrl = "https://api.lunarcrush.com/v2?data=assets&key="+ process.env.API_KEY +"&symbol=" + currency.currency;
        
        const response = await axios.get(apiUrl);
        const results = await response.data;
        const currencyObject = await {
            currency: results.data[0].symbol,
            currency_name: results.data[0].name,
            price: results.data[0].price
        }
        console.log(currencyObject);
        return await currencyObject;
    }
    
    catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err)
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err)
        } else {
          console.log("Client Error:", err)
        }
    }
}

module.exports = getPrice;