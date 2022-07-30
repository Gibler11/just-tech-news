const router = require('express').Router();

const userRoutes = require('./user.js');
// const commentRoutes = require('./dashboard-routes');

router.use('/user', userRoutes);

module.exports = router;