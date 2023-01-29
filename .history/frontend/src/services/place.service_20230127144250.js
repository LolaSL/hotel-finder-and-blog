import PlaceFinder from "../apis/PlaceFinder.js";

class PlaceService {
  getProducts(page) {
    return PlaceFinder.get(`/plaxe/?page=${page}`);
  }
  getProduct(id) {
    return PlaceFinder.get(`/products/${id}`);
  }
  getProductByName(name) {
    return PlaceFinder.get(`/products/${name}`);
  }
}


export default new PlaceService();