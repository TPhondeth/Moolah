const router = require('express').Router();

const userRoutes = require('./user-routes');
const currencyRoutes = require('./currency-routes');
const userCurrencyRoutes = require('./userCurrency-routes');

router.use('/users', userRoutes);
router.use('/currencies', currencyRoutes);
router.use('/usercurrency', userCurrencyRoutes)


module.exports = router;