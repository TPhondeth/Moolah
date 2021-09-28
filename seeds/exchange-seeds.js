const {
    Exchange
} = require('../models');

const exchangeData = [
    {
        exchange: 'Binance',
        impact_score: '10.00',
        rating: 'A'

    },
    {
        exchange: 'Coinbase',
        impact_score: '8.93',
        rating: 'A'
    },
    {
        exchange: 'Bitcoin.com',
        impact_score: '8.60',
        rating: 'D'
    },
    {
        exchange: 'OKEx',
        impact_score: '8.28',
        rating: 'C'
    },
    {
        exchange: 'FTX',
        impact_score: '7.97',
        rating: 'A'
    },
    {
        exchange: 'Crypto.com',
        impact_score: '7.94',
        rating: 'C'
    },
    {
        exchange: 'Pancake Swap',
        impact_score: '7.90',
        rating: 'A'
    },
    {
        exchange: 'Bybit',
        impact_score: '7.79',
        rating: 'A'
    },
    {
        exchange: 'Huobi Global',
        impact_score: '7.70',
        rating: 'C'
    },
    {
        exchange: 'HitBTC',
        impact_score: '7.61',
        rating: 'A'
    }
];

const seedExchanges = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchanges;