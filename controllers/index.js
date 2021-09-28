const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homepage-routes');
// const walletRoutes = require('./wallet-routes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
// router.use('/wallet', walletRoutes);

module.exports = router;