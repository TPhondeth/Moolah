require('dotenv').config();

// fetch from lunar crush api the latest price of currency using its symbol
async function get_asset(symbol) {
    
    const fetch = await import('node-fetch');

    const apiUrl = "https://api.lunarcrush.com/v2?data=assets&key="+ process.env.API_KEY +"&symbol=" + symbol;

    const response = await fetch(apiUrl);
    
    if (response.ok) {
        response.json().then(function(asset) {
            console.log(data);
            return asset.data.price;
        });
    } else {
        alert('Error: LunarCRUSH asset Not Found');
    }
}

module.exports = get_asset;