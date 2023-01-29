import PlaceFinder from "../apis/PlaceFinder.js";

class PlaceService {
  getPlaces() {
    return PlaceFinder.get(`/`);
  }
  getPlace(id) {
    return PlaceFinder.get(`/products/${id}`);
  }
  getPByName(name) {
    return PlaceFinder.get(`/products/${name}`);
  }
}


export default new PlaceService();