const router = require('express').Router();
const {
    Currency,
    User,
    Post
} = require('../../models');
const withAuth = require('../../utils/auth');

// Get all exchanges
router.get('/', (req, res) => {
    Exchange.findAll({
            attributes: [
                'id',
                'exchange',
                'impact_score',
                'rating',
            ],
            include: [{
                    model: Currency,
                    attributes: ['id', 'currency', 'currency_name', 'price'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbExchangeData => res.json(dbExchangeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get exchange by id
router.get('/:id', (req, res) => {
    Exchange.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'exchange',
                'impact_score',
                'rating',
            ],
            include: [{
                    model: Currency,
                    attributes: ['id', 'currency', 'currency_name', 'price'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbExchangeData => {
            if (!dbExchangeData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(dbExchangeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Add new exchange
router.post('/', withAuth, (req, res) => {
    // expects {exchange: 'Binance', impact_score: '10.00', rating: A}
    Exchange.create({
            exchange: req.body.exchange,
            impact_score: req.body.impact_score,
            rating: req.session.rating
        })
        .then(dbExchangeData => res.json(dbExchangeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update exchange
router.put('/:id', withAuth, (req, res) => {
    Exchange.update({
            exchange: req.body.exchange
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbExchangeData => {
            if (!dbExchangeData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            res.json(dbExchangeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete exchange
router.delete('/:id', withAuth, (req, res) => {
    Exchange.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbExchangeData => {
            if (!dbExchangeData) {
                res.status(404).json({
                    message: 'No currency found with this id'
                });
                return;
            }
            res.json(dbExchangeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
