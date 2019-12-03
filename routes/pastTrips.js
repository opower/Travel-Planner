const router = require('express').Router();
const {getTrips, postTrips, getTrip} = require('../controllers/pastController.js');
const {pastValidator} = require('../validators.js');

router.get('/', getTrips);

router.get('/:name', getTrip);

router.post('/',  pastValidator, postTrips);

const pastRouter = router;
module.exports = pastRouter;