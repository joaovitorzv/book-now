import axios from 'axios';

const api = axios.create({
  baseURL: 'https://booknow-jv.herokuapp.com'
});

export default api;