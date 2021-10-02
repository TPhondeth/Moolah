const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homepage-routes');
const portfolioRoutes = require('./portfolio-routes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;