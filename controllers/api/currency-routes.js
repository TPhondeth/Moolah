const router = require('express').Router();
const {
    Currency
} = require('../../models');
const withAuth = require('../../utils/auth');
const getPrice = require('../../public/javascript/currency');

// Get all currencies
router.get('/', (req, res) => {
    
    Currency.findAll({
            attributes: ['id', 'symbol']
        })
        .then(dbCurrencyData => {
            
            // res.json(dbCurrencyData);

            const currencies = dbCurrencyData.map(currency => currency.get({
                plain: true
            }));
            
            getPrice(currencies)
                .then(updatedCurrencies => {
                    if (updatedCurrencies.length > 1){
                        updatedCurrencies.sort((a, b) => b.market_cap - a.market_cap);
                    }
                    res.json(updatedCurrencies);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get currency by id
router.get('/:id', (req, res) => {
    Currency.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'symbol']
        })
        .then(dbCurrencyData => {
            
            if (!dbCurrencyData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            const currency = dbCurrencyData.get({plain: true});
            getPrice(currency)
                .then(updatedCurrency => {
                    res.json(updatedCurrency);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Add new currency
router.post('/', withAuth, (req, res) => {
    // expects {currency: 'BTC', currency_name: 'BITCOIN', price: 43016.58}
    Currency.create({
            symbol: req.body.symbol
        })
        .then(dbCurrencyData => res.json(dbCurrencyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;