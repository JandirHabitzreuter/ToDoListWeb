import axios from 'axios';

const base_url = '/list';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function getList() {
  const response = await api.get(base_url); 
  return response.data;
}

export async function createToDo(data : any) {
  const response = await api.post(base_url, data); 
  return response.data;
}

export async function deleteToDo(id : string) {
  console.log(id);
  const response = await api.delete(`${base_url}/${id}`);
  return response.data;
}
