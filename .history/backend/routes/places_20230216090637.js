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
placeRouter.post('/', createPlace);
placeRouter.post('/', deletePlace);


module.exports = placeRouter;