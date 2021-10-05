const { Currency } = require("../models");

const currencyData = [
  {
    symbol: "BTC"
  },
  {
    symbol: "ETH"
  },
  {
    symbol: "HEX"
  },
  {
    symbol: "ADA"
  },
  {
    symbol: "XRP"
  },
  {
    symbol: "SOL"
  },
  {
    symbol: "DOT"
  },
  {
    symbol: "USDC"
  },
  {
    symbol: "BNB"
  },
  {
    symbol: "DOGE"
  }
];

const seedCurrencies = () => Currency.bulkCreate(currencyData);

module.exports = seedCurrencies;