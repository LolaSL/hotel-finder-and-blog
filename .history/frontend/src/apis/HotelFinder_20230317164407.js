import axios from '';


export default axios.create({
  baseURL: "http://localhost:8090/api/v1/hotels",
  withCredentials: true
});