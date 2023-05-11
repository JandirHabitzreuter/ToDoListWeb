import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getList = async () => {
  const response = await api.get('/list'); 
  return response.data;
};
