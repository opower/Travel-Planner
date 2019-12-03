const router = require('express').Router();
const futureRouter= require('./futureTrips.js');
const pastRouter = require('./pastTrips.js');
router.use('/future', futureRouter);
router.use('/past', pastRouter);
module.exports = router;
