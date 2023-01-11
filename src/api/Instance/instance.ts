// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5005/',
  // withCredentials: true,
});
