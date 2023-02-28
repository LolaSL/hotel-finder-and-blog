const { Router } = require('express')
const {
 getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  removeHotel,
  addReview,
  updateReview

} = require('../controllers/hotel.js')

const hotelRouter = Router()

hotelRouter.get("/",  getHotels);
hotelRouter.get('/:id', getHotelById);
hotelRouter.post('/', createHotel);
hotelRouter.put('/:id', updateHotel);
hotelRouter.delete('/:id', removeHotel);
hotelRouter.post("/:id/addReview", addReview);
hotelRouter.put("/:id/updateReview",  updateReview);

module.exports = hotelRouter;
