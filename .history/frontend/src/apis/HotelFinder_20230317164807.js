import axios from './lib/axios.js';


export default  axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true
 });
