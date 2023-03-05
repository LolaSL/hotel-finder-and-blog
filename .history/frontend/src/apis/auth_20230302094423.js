
import axios from 'axios';
// axios.defaults.withCredentials = true;

export async function getUsers(usersData) {
  return await axios.post({ 'http://localhost:8090/api/v1/auth/users':
    usersData , withCredentials: true}
    
  )
}


export async function onRegistration(registrationData) {
  return await axios.post({ 'http://localhost:8090/api/v1/auth/register':
    registrationData, withCredentials: true }
   
  )
}

export async function onLogin(loginData) {
  return await axios.post( {'http://localhost:8090/api/v1/auth/login', 
  loginData , withCredentials: true })
}

export async function onLogout() {
  return await axios.get('http://localhost:8090/api/v1/auth/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:8090/api/v1/auth/protected')
}