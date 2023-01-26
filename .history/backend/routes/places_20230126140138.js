const { Router } = require('express')
const {
 getPlaces,
  getPlaceById,
  createPlace,
 
} = require('../controllers/place.js')

const placeRouter = Router()

hotelRouter.get("/",   getPlaces);
hotelRouter.get('/:id', getPlaceById);
hotelRouter.post('/', createPlace);


module.exports = placeRouter;