import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { getTokenFromStorage, saveTokenToStorage } from '../../utils/token';

export const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const getToken = (config: AxiosRequestConfig) => {
  try {
    const token = getTokenFromStorage();
    if (config.headers) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};

// const setToken = (accessToken: string) => {
//   try {
//     if (accessToken) {
//       localStorage.setItem('token', accessToken);
//     }
//   } catch (e) {
//     console.log('setToken => catch => ', e);
//   }
// };

instance.interceptors.request.use(
  (config) => {
    getToken(config);
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (config) => config,
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && originalRequest.url === `/auth/login`) {
      return Promise.reject(err);
    }
    if (err.response.status === 401 && err.config && !err.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await instance.post('/auth/refresh-token');

        saveTokenToStorage(response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log('error', e);
      }
    }
    return null;
  }
);
