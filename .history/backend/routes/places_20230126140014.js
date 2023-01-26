const { Router } = require('express')
const {
 getPlaces,
  getPlaceById,
  createPlace,
 
} = require('../controllers/place.js')

const hotelRouter = Router()

hotelRouter.get("/",   getPlaces,);
hotelRouter.get('/:id', getHotelById);
hotelRouter.post('/', createHotel);
hotelRouter.put('/:id', updateHotel);
hotelRouter.delete('/:id', removeHotel);
hotelRouter.post("/:id/addReview", addReview);

module.exports = hotelRouter;