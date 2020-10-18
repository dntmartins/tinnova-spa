import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {"Access-Control-Allow-Origin": "*"}
});


api.interceptors.request.use(async request => {
  console.log('Starting Request: ', request);
  return request;
});

api.interceptors.response.use(response => {
  console.log('Response: ', response);
  return response;
});

export default api;
