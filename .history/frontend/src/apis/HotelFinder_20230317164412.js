import axios from 'ax';


export default axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true
});