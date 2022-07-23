const router = require('express').Router();

const apiRouter = require('./api');
const homeroutes = require('./home-routes.js');
const commentRoutes = require('./dashboard-routes');

router.use('/', homeroutes);
router. use('/api',apiRouter);

module.exports = router;