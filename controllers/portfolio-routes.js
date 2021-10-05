// Dependencies
const router = require("express").Router();
const { User, Currency } = require("../models");
const getPrice = require('../public/javascript/currency');

const withAuth = require('../utils/auth');

// Get all currencies for dashboard
router.get('/', withAuth, (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.session.user_id
        },
        include: [{
                model: Currency,
                attribute: ['symbol']
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({
                message: 'No user found with this id'
            });
            return;
        }
        const user = dbUserData.get({plain: true});
        getPrice(user.currencies)
            .then(updatedCurrencies => {
                if (updatedCurrencies.length > 1){
                    updatedCurrencies.sort((a, b) => b.market_cap - a.market_cap);
                }
                user.currencies = updatedCurrencies;
                
                Currency.findAll({
                    attributes: ['id', 'symbol']
                })
                .then(dbCurrencyData => {
                    
                    // res.json(dbCurrencyData);
        
                    const currencies = dbCurrencyData.map(currency => currency.get({
                        plain: true
                    }));
                    res.render('portfolio', {user, currencies});
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
                // res.render('portfolio', {user, loggedIn: true});
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

module.exports = router;