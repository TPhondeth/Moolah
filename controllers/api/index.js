const router = require('express').Router();

const userRoutes = require('./user-routes');
const currencyRoutes = require('./currency-routes');
const postRoutes = require('./post-routes');
const exchangeRoutes = require('./exchange-routes');

router.use('/users', userRoutes);
router.use('/currencies', currencyRoutes);
router.use('/posts', postRoutes);
router.use('/exchanges', exchangeRoutes);


module.exports = router;