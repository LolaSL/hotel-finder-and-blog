const { Router } = require('express');
const {
  getPlaces,
  getPlaceById,
  get
  createPlace,
  updatePlace,
  deletePlace
 
} = require('../controllers/place.js');


const placeRouter = Router()

placeRouter.get('/',   getPlaces);
placeRouter.get('/:id', getPlaceById);
placeRouter.post('/', createPlace);
placeRouter.put('/:id', updatePlace);
placeRouter.delete('/:id', deletePlace);


module.exports = placeRouter;