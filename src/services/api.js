import axios from 'axios';

// Replace the URL below with your Render backend URL
const API = axios.create({
  baseURL: 'https://your-backend-name.onrender.com/api'
});

export const getProducts = () => API.get('/product');
