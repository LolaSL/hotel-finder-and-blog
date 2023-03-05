import axios from "axios";

export default axios.createHotel({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true 
});