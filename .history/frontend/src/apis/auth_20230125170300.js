// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8090/api/v1/auth",
//    withCredentials: true 
// });
import axios from 'axios';
axios.defaults.withCredentials = true;
export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8090/api/auth/register',
    registrationData
  )
}


export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8090/api/auth/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:8090/api/auth/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:8090/api/auth/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:8090/api/auth/protected')
}