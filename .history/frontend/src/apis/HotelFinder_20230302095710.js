import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true 
});
console.log(api.default.baseURL)