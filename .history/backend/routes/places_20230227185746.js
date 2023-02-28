const { Router } = require('express');
const {
  getPlaces,
  getPlaceById,
  getPlaceByDestination,
  createPlace,
  updatePlace,
  deletePlace
 
} = require('../controllers/place.js');


const placeRouter = Router()

placeRouter.get('/',   getPlaces);
placeRouter.get('/:id', getPlaceById);
placeRouter.get('/destination/:id', getPlaceByDestination);
placeRouter.post('/', createPlace);
placeRouter.put('/:id', updatePlace);
placeRouter.delete('/:id', deletePlace);


module.exports = placeRouter;