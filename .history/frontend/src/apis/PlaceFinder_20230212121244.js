import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8090/api/v1/places",
//   withCredentials: true
// });

export async function getUsers(usersData) {
  return await axios.post(
    'http://localhost:8090/api/v1/auth/users',
    usersData
  )
}