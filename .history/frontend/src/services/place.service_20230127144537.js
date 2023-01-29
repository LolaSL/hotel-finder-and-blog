import PlaceFinder from "../apis/PlaceFinder.js";

export defaultclass PlaceService {
  getPlaces() {
    return PlaceFinder.get(`/`);
  }
  getPlaceById(id) {
    return PlaceFinder.get(`/products/${id}`);
  }

}

 new PlaceService();