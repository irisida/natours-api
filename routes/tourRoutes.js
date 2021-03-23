const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.validateTourID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.validatePostRequestBody, tourController.createNewTour);

router
  .route('/:id')
  .get(tourController.getOneTour)
  .patch(tourController.updateOneTour)
  .delete(tourController.deleteOneTour);

module.exports = router;
