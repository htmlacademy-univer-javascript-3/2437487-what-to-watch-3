import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const.ts';
import {getToken} from 'services/token.ts';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (!config.headers) {
      return config;
    }
    const token = getToken();
    if (token) {
      config.headers['x-token'] = token;
    }
    return config;
  });
  return api;
};
