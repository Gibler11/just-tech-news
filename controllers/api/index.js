const router = require('express').Router();

const apiRouter = require('./api/');
const homeroutes = require('./home-routes');
const commentRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', postRoutes);
router.use('/api', apiRoutes);

module.exports = router;