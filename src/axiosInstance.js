import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import {jwtDecode} from 'jwt-decode';

const axiosInstance = axios.create({
  baseURL: 'http://128.199.30.51:5007/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const cookies = parseCookies();
    const token = cookies.accessToken;

    if (token && isTokenExpired(token)) {
      alert('Session expired. Please log in again.');
      destroyCookie(null, 'accessToken');
       window.location.href = '/auth/login';
      return Promise.reject('Token expired');
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
