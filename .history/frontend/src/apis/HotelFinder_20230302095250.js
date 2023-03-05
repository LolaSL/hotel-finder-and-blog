// import axios from "axios";

export default axios.get({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true 
});

import axios from 'axios';
axios.defaults.withCredentials = true;

export async function getHotels(hotelsData) {
  return await axios.get(
    baseURL: "http://localhost:8090/api/v1/hotels",
  )
}