const { Currency } = require("../Moolah/models");

const valueObj = {};

const valueConversion = (numberowned) => {
  return {
    value= Currency.currencyData[1].currency_name.price
  };
};
console.log(valueConversion);