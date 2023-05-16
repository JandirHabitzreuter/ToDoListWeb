import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function getList() {
  const response = await api.get('/list'); 
  return response.data;
}

export async function createToDo(data : any) {
  const response = await api.post('/list', data); 
  return response.data;
}
