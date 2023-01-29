import PlaceFinder from "../apis/PlaceFinder.js";

export default class placeService {
  getPlaces() {
    return PlaceFinder.get(`/`);
  }
  getPlaceById(id) {
    return PlaceFinder.get(`/products/${id}`);
  }

}

 newplaceService();