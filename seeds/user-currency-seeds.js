const {
    UserCurrency,
    User
} = require("../models");
const seedUsers = require("./user-seeds");

const userCurrencyData = [
    {
        user_id: 1,
        currency_id: 5,
    },
    {
        user_id: 2,
        currency_id: 6,
    },
    {
        user_id: 3,
        currency_id: 4,
    },
    {
        user_id: 4,
        currency_id: 8,
    },
    {
        user_id: 5,
        currency_id: 9,
    },
    {
        user_id: 5,
        currency_id: 7,
    },
    {
        user_id: 4,
        currency_id: 5,
    }
];

const seedUserCurrencies = () => UserCurrency.bulkCreate(userCurrencyData);

module.exports = seedUserCurrencies;