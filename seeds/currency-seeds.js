const { Currency } = require("../models");

const currencyData = [
  {
    currency: "BTC",
    currency_name: "Bitcoin",
    curr_ownd: 1,
  },
  {
    currency: "ETH",
    currency_name: "Ethereum",
    curr_ownd: 1,
  },
  {
    currency: "HEX",
    currency_name: "HEX",
    curr_ownd: 1,
  },
  {
    currency: "ADA",
    currency_name: "Cardano",
    curr_ownd: 1,
  },
  {
    currency: "XRP",
    currency_name: "XRP",
    curr_ownd: 1,
  },
  {
    currency: "SOL",
    currency_name: "Solana",
    curr_ownd: 1,
  },
  {
    currency: "DOT",
    currency_name: "Polkadot",
    curr_ownd: 1,
  },
  {
    currency: "USDC",
    currency_name: "USD Coin",
    curr_ownd: 1,
  },
  {
    currency: "BNB",
    currency_name: "Binance Coin",
    curr_ownd: 1,
  },
  {
    currency: "DOGE",
    currency_name: "Dogecoin",
    curr_ownd: 1,
  },
];

const seedCurrencies = () => Currency.bulkCreate(currencyData);

module.exports = seedCurrencies;
