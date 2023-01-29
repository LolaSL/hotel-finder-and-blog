import PlaceFinder from "../apis/PlaceFinder.js";

export default class PlaceService {
  getPlaces() {
    return PlaceFinder.get(`/`);
  }
  getPlaceById(id) {
    return PlaceFinder.get(`/products/${id}`);
  }

}

 new PlaceService();