// Dependencies
const router = require("express").Router();
const { Currency } = require("../models");
const getPrice = require('../public/javascript/currency');

// Home page
router.get('/', (req, res) => {
    Currency.findAll({
        attributes: ['id', 'symbol']
    })
    .then(dbCurrencyData => {
        const currencies = dbCurrencyData.map(currency => currency.get({
            plain: true
        }));
        
        getPrice(currencies)
            .then(updatedCurrencies => {
                if (updatedCurrencies.length > 1){
                    updatedCurrencies.sort((a, b) => b.market_cap - a.market_cap);
                }
                res.render('homepage', {updatedCurrencies, loggedIn: req.session.loggedIn});
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

// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render("login");
});

// Sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;
