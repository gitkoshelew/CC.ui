import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  // withCredentials: true,
});

const getToken = async (config: AxiosRequestConfig) => {
  try {
    const token = await localStorage.getItem('token');
    if (config.headers) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};

const setToken = (accessToken: string) => {
  try {
    if (accessToken) {
      localStorage.setItem('token', accessToken);
    }
  } catch (e) {
    console.log('setToken => catch => ', e);
  }
};

instance.interceptors.request.use(
  async (config) => {
    await getToken(config);
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  async (response) => {
    setToken(response.data.accessToken);
    return response;
  },
  (err) => Promise.reject(err)
);
