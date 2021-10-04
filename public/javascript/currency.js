require('dotenv').config();
const axios = require('axios');

// fetch from lunar crush api the latest price of currency using its symbol
async function getPrice(currency) {
  if (currency.length > 0) {
    const updatedCurrencies = [];

    for (let i=0; i < currency.length; i++){
      try {
          const apiUrl = "https://api.lunarcrush.com/v2?data=assets&key="+ process.env.API_KEY +"&symbol=" + currency[i].symbol;
          
          const response = await axios.get(apiUrl);
          const results = response.data;
          const currencyObject = {
              id: currency[i].id,
              symbol: results.data[0].symbol,
              currency_name: results.data[0].name,
              price: (results.data[0].price).toFixed(2),
              day_change: results.data[0].percent_change_24h,
              market_cap: results.data[0].market_cap
          }
          updatedCurrencies.push(currencyObject);
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
    console.log(updatedCurrencies);
    return updatedCurrencies;
  }

  else {
    try {
      const apiUrl = "https://api.lunarcrush.com/v2?data=assets&key="+ process.env.API_KEY +"&symbol=" + currency.symbol;
      
      const response = await axios.get(apiUrl);
      const results = response.data;
      const currencyObject = {
        id: currency.id,
        symbol: results.data[0].symbol,
        currency_name: results.data[0].name,
        price: (results.data[0].price).toFixed(2),
        day_change: results.data[0].percent_change_24h,
        market_cap: results.data[0].market_cap
      }
      return currencyObject;
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
}

module.exports = getPrice;