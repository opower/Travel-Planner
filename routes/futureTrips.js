const router = require('express').Router();
const futureController = require('../controllers/futureController.js');
const {futureValidator} = require('../validators.js');

router.get('/', futureController.getFutureTrips);

router.get('/:name', futureController.getTrip);

router.post('/', futureValidator, futureController.postFutureTrips);

const futureRouter = router;
module.exports = futureRouter;