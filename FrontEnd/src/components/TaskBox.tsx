import { useState, useEffect } from 'react';
import { NewTask } from './NewTask';
import { NoTask } from './NoTask';
import { Task } from './Task';
import styles from './TaskBox.module.css';
import { getList, createToDo, deleteToDo, updateIsCompletedTodoList } from "../routes/toDoList";

interface TaskItens{
  id: string;
  content: string;
  isCompleted: boolean;
}
const taskTypes: TaskItens[] = [];

export function TaskBox() { 

  const [tasks, setTasks] = useState(taskTypes);
  const [isUpdate, setIsUpdate] = useState(true);

  const [completedTasks, setcompletedTasks] = useState(0);

  useEffect(() => {    
    async function loadToDoList() {
      try {              
        const list = await getList();  
        setTasks(list);          
      } catch (error) {
        console.log(error);  
      }
    }  
    loadToDoList();  
  }, [isUpdate]);

  async function onChangeCheckTask(taskId: string){    
    await updateIsCompletedTodoList(taskId);
     setIsUpdate(!isUpdate);
  }

  async function onDeleteTask(taskId: string) {
   await deleteToDo(taskId);
   setIsUpdate(!isUpdate);
  }

  async function onAddTask(content: string) {
    const data = {
      content
    }
    await createToDo(data);
    setIsUpdate(!isUpdate);
  }

  return(
    <div>
      <NewTask onAddTask={onAddTask}/>

      <div className={styles.taskBox}>
        <header>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>{completedTasks} de {tasks.length}</span>
          </div>
        </header>

        {tasks.length > 0 ?
        (tasks.map(task => {
          return (
            <Task 
              key={task.id}
              id={task.id}
              content={task.content}
              isCompleted={task.isCompleted}
              onCheckTask={onChangeCheckTask}
              onUncheckTask={onChangeCheckTask}
              onDeleteTask={onDeleteTask}
            />
          )
        })) : (<NoTask />)
        }
      </div>
    </div>
  )
}