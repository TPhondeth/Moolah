const router = require("express").Router();
const sequelize = require("../config/connection");
const {
    Post,
    User,
    Currency
} = require("../models");

const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    Currency.findAll({
            where: {
                id: req.session.id
            },
            attributes: [
                'id',
                'currency'
            ],
            include: [{
                model: User,
                attributes: ['username']
            }]
        })
        .then(dbCurrencyData => {
            const currency = dbCurrencyData.map(post => post.get({
                plain: true
            }));
            res.render('holding', {
                currency,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;