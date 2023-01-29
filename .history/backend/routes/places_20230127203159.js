const { Router } = require('express')
const {
 getPlaces,
  getPlaceById,
  createPlace,
 
} = require('../controllers/place.js')

const placeRouter = Router()

placeRouter.get("/",   getPlaces);
placeRouter.get('/place:id', getPlaceById);
placeRouter.post('/', createPlace);


module.exports = placeRouter;