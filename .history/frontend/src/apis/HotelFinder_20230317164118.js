// import axios from "axios";
const axios =require('axios')

export default axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true
});