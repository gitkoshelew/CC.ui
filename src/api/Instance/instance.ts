import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  // withCredentials: true,
});

const getToken = (config: AxiosRequestConfig) => {
  try {
    const token = localStorage.getItem('token');
    if (config.headers) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};

const setToken = async (accessToken: string) => {
  try {
    if (accessToken) {
      await localStorage.setItem('token', accessToken);
    }
  } catch (e) {
    console.log('setToken => catch => ', e);
  }
};

instance.interceptors.request.use(
  (config) => {
    getToken(config);
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    setToken(response.data.accessToken);
    return response;
  },
  (err) => Promise.reject(err)
);
