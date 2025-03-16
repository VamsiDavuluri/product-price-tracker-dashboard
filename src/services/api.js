import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure backend running here
});

export const getProducts = () => API.get('/product');
