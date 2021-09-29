const { Currency } = require("../models");

const currencyData = [
  {
    currency: "BTC",
    currency_name: "Bitcoin",
    price: 43016.58,
  },
  {
    currency: "ETH",
    currency_name: "Ethereum",
    price: 2963.74,
  },
  {
    currency: "HEX",
    currency_name: "HEX",
    price: 0.47,
  },
  {
    currency: "ADA",
    currency_name: "Cardano",
    price: 2.31,
  },
  {
    currency: "XRP",
    currency_name: "XRP",
    price: 0.95,
  },
  {
    currency: "SOL",
    currency_name: "Solana",
    price: 141.56,
  },
  {
    currency: "DOT",
    currency_name: "Polkadot",
    price: 31.08,
  },
  {
    currency: "USDC",
    currency_name: "USD Coin",
    price: 1.0,
  },
  {
    currency: "BNB",
    currency_name: "Binance Coin",
    price: 358.44,
  },
  {
    currency: "DOGE",
    currency_name: "Dogecoin",
    price: 0.21,
  },
];

const seedCurrencies = () => Currency.bulkCreate(currencyData);

module.exports = seedCurrencies;
