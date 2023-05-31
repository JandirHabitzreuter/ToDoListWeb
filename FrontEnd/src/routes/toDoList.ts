import api  from "./axios";

const base_url = '/list';

export async function getList() {
    const response = await api.get(base_url); 
    return response.data;
  }
  
  export async function createToDo(data : any) {
    const response = await api.post(base_url, data); 
    return response.data;
  }
  
  export async function deleteToDo(id : string) {  
    const response = await api.delete(`${base_url}/${id}`);
    return response.data;
  }
  
  export async function updateIsCompletedTodoList(id : string) {
    const response = await api.put(`${base_url}/${id}`);
    return response.data;
  }