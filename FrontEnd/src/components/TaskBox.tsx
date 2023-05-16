import { useState, useEffect } from 'react';
import { NewTask } from './NewTask';
import { NoTask } from './NoTask';
import { Task } from './Task';
import styles from './TaskBox.module.css';
import { getList, createToDo } from "../api";

interface TaskItens{
  id: string;
  content: string;
  isCompleted: boolean;
}
const taskTypes: TaskItens[] = [];

export function TaskBox() { 

  const [tasks, setTasks] = useState(taskTypes);
  const [isUpdate, setIsUpdate] = useState(false);

  const [completedTasks, setcompletedTasks] = useState(tasks.filter(task => {
    return task.isCompleted === true;
  }).length);

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

  function onChangeCheckTask(taskId: string){
    console.log(taskId);
    const updatingTask = tasks.map(task => {
      return task.id === taskId ? {...task, isCompleted: !task.isCompleted} : {...task}
    });

    setTasks(updatingTask);

    setcompletedTasks(updatingTask.filter(task => {
      return task.isCompleted === true;
    }).length)
  }

  function onDeleteTask(taskId: string) {
    const tasksWithoutDeletingOne = tasks.filter(task => {
      return task.id != taskId 
    });

    setTasks(tasksWithoutDeletingOne);

    setcompletedTasks(tasksWithoutDeletingOne.filter(task => {
      return task.isCompleted === true;
    }).length)
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