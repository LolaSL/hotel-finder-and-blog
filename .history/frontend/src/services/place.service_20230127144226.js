import PlaceFinder from "../apis/PlaceFinder.js";

class PlaceService {
  getProducts(page) {
    return PlaceFinder.get(`/products/?page=${page}`);
  }
  getProduct(id) {
    return PlaceFinder.get(`/products/${id}`);
  }
  getProductByName(name) {
    return PlaceFinder.get(`/products/${name}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PlaceService();