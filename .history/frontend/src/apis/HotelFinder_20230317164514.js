import axios from 'axios';


 axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true
 });
export de