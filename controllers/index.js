const router = require('express').Router();

const apiRoutes = require('./api/');


router.use('/api', apiRoutes);
//exported file router
module.exports = router;