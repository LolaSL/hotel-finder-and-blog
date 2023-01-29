import PlaceFinder from "../apis/PlaceFinder.js";

class PlaceService {
  getPlaces() {
    return PlaceFinder.get(`/`);
  }
  getPlaceById=id) {
    return PlaceFinder.get(`/products/${id}`);
  }

}


export default new PlaceService();