const router = require('express').Router();

const apiRouter = require('./api/');
const homeroutes = require('./home-routes.');
const commentRoutes = require('./dashboard-routes');

router.use('/', homeroutes);
router.

module.exports = router;