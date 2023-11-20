import axios from 'axios';
import { store } from "../reducers";
import { setUser, delUser } from "../reducers/userReducer";


const URL = 'https://ulia-server.onrender.com/';


const api = axios.create({
  withCredentials: true,
  baseURL: URL
});

export const registration = async (name, email, password) => {
  try {
    const response = await api.post(`${URL}/users/registration`, { name, email, password });

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const login = async (email, password) => {
  try {

    const response = await api.post(`${URL}/users/login`, { email, password });

    localStorage.setItem('token', response.data.access_token);

    store.dispatch(setUser(response.data.user));

    return response.data.user;
  } catch (e) {
    console.log(e)
  }
}
export const logout = async () => {
  try {
    store.dispatch(delUser());

    return localStorage.removeItem('token');


  } catch (e) {
    console.log(e)
  }
}
export const refresh = async () => {
  try {

    const response = await api.get(`${URL}/users/refresh`, { withCredentials: true });

  

    localStorage.setItem('token', response.data.tokenPair.access_token);

    // localStorage.setItem('token', response.data.access_token);

    store.dispatch(setUser(response.data.user));

    return response.data.user;
  } catch (e) {
    console.log(e);
    return localStorage.removeItem('token');
  }
}

export const createPoem = async (user_id, name, text) => {
  try {
    const rating = 0;
    const response = await api.post(`${URL}/poems`, { user_id, name, text, rating });


    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const getPoem = async () => {
  try {

    const response = await api.get(`/poems`);

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const updatePoem = async (_id, rating) => {
  try {

    const response = await api.post(`${URL}/poems/rating`, {_id, rating });

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const getComments = async () => {
  try {

    const response = await api.get(`${URL}/comments`);

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const addComment = async (user_id, text, poem_id) => {
  try {

   const response = await api.post(`${URL}/comments`, {user_id, text, poem_id});

    return response.data;
  } catch (e) {
    console.log(e)
  }
}
export const sendEmail = async (user_email, text) => {
  try {

   const response = await api.post(`${URL}/users/send`, {user_email, text});

    return response.data;
  } catch (e) {
    console.log(e)
  }
}