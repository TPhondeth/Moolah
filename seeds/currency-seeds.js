const { Currency } = require("../models");

const currencyData = [
  {
    currency: "BTC",
  },
  {
    currency: "ETH",
  },
  {
    currency: "HEX",
  },
  {
    currency: "ADA",
  },
  {
    currency: "XRP",
  },
  {
    currency: "SOL",
  },
  {
    currency: "DOT",
  },
  {
    currency: "USDC",
  },
  {
    currency: "BNB",
  },
  {
    currency: "DOGE",
  },
];

const seedCurrencies = () => Currency.bulkCreate(currencyData);

module.exports = seedCurrencies;
