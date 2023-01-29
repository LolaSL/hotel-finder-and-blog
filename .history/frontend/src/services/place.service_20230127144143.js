import PlaceFinder from "../apis/PlaceFinder.js";

class ProductService {
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

export default new ProductService();