const router = require('express').Router();
const {
    Currency
} = require('../../models');
const withAuth = require('../../utils/auth');
const getPrice = require('../../public/javascript/currency')

// Get all currencies
router.get('/', (req, res) => {
    
    Currency.findAll({
            attributes: [
                'id',
                'currency',
                'currency_name',
                'price'
            ]
        })
        .then(dbCurrencyData => {
            
            // res.json(dbCurrencyData);

            const currencies = dbCurrencyData.map(currency => currency.get({
                plain: true
            }));
            const updatedCurrencies = [];
            for(let i = 0; i < currencies.length; i++){
                // updatedCurrencies.push(getPrice(currencies[i]));
                const updatedPrice = getPrice(currencies[i]);
                console.log(updatedPrice);
            }
            res.json(updatedCurrencies);
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
            attributes: [
                'id',
                'currency',
                'currency_name',
                'price',
            ]
        })
        .then(dbCurrencyData => {
            if (!dbCurrencyData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            res.json(dbCurrencyData);
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
            currency: req.body.currency,
            currency_name: req.body.currency_name,
            price: req.session.price
        })
        .then(dbCurrencyData => res.json(dbCurrencyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update currency
router.put('/:id', withAuth, (req, res) => {
    Currency.update({
            currency: req.body.currency
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbCurrencyData => {
            if (!dbCurrencyData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            res.json(dbCurrencyData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete currency
router.delete('/:id', withAuth, (req, res) => {
    Currency.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCurrencyData => {
            if (!dbCurrencyData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            res.json(dbCurrencyData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;