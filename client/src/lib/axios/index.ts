import axiosInstance from 'axios';

export const axios = axiosInstance.create({
  baseURL: 'https://localhost:5001',
  timeout: 5000,
});
