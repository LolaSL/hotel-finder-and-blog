import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.get({
  baseURL: "http://localhost:8090/api/v1/hotels",
  // withCredentials: true
});