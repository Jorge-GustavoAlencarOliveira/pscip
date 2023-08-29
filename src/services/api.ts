import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { AuthTokenError } from './errors/AuthTokenError';
import {Logout } from '../../dataContext';

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['@pscip.token']}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (err: AxiosError) => {
      if (err.response?.status === 401) {
        if (typeof window !== undefined) {
          // Logout();
        }
      } else {
        return Promise.reject(new AuthTokenError());
      }
      return Promise.reject(err);
    },
  );
  return api;
}
