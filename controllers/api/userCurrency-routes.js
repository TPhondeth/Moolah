const router = require('express').Router();
const {
    UserCurrency
} = require('../../models');
const withAuth = require('../../utils/auth');

// add currency to user
router.post('/', withAuth, (req, res) => {
    UserCurrency.create({
            user_id: req.body.user_id,
            currency_id: req.body.currency_id
        })
        .then(dbUserCurrencyData => res.json(dbUserCurrencyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;