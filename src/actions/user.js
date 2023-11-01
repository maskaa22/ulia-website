import axios from 'axios';

const URL = 'http://localhost:5000';

export const registration = async (name, email, password) => {
  try {
    const response = await axios.post(`${URL}/users/registration`, {name, email, password});

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const login = async (email, password) => {
  try {

    const response = await axios.post(`${URL}/users/login`, {email, password});

    localStorage.setItem('token', response.data.access_token);

    return response.data.user;
  } catch (e) {
    console.log(e)
  }
}
export const logout = async () => {
  try {

    // return localStorage.setItem('token', '');
    return localStorage.removeItem('token');


  } catch (e) {
    console.log(e)
  }
}