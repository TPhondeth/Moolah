const router = require('express').Router();

const userRoutes = require('./user-routes');
const currencyRoutes = require('./currency-routes');

router.use('/users', userRoutes);
router.use('/currencies', currencyRoutes);


module.exports = router;