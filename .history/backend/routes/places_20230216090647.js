const { Router } = require('express');
const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace
 
} = require('../controllers/place.js');


const placeRouter = Router()

placeRouter.get("/",   getPlaces);
placeRouter.get('/:id', getPlaceById);
placeRouter.post('/', createPlace);
placeRouter.post('/', updatePlace);
placeRouter.post('/:id', deletePlace);


module.exports = placeRouter;