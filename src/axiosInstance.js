import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://128.199.30.51:5007/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
