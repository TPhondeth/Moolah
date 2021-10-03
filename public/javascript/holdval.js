require("dotenv").config();
const { default: axios } = require("axios");
const { Currency } = require("../../models");
const { UserCurrency
} = require("../../models/User-Currency");
const apiKey = process.env.API_Key



async function priceValue(event){
  event.preventDefault();
  const renderCurrency = async (req,res)=>{
    try{
// Get updated prices for Crypto Currency
      const{ data } = await axios.get(
`https://api.lunarcrush.com/v2?data=assets&key=${apiKey}&symbol=${Currency.currency}`
      );
      //Put Currency the price into an Object, Picking out only the currency chosen
      // const currencyObj={
      //   for (let i=0; i<UserCurrency.length; i++){

      //   }
      }


    } finally {
     
    }





  };






