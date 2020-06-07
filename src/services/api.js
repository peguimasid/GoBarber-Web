import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.65.234.98',
});

export default api;
