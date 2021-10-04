const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const portfolioRoutes = require('./portfolio-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/portfolio', portfolioRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;