import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000',
  withCredentials: true,
});

export const fetchTasks = () => API.get('/api/tasks');
export const createTask = (data) => API.post('/api/task', data);

export default API;


