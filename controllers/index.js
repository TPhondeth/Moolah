const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homepage-routes');
const portfolioRoutes = require('./portfolio-routes');
const holdingRoutes = require('./holding-routes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/holding', holdingRoutes);

module.exports = router;