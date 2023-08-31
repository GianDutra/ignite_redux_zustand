import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ignite-redux-zustand-json-server.vercel.app/courses',
});