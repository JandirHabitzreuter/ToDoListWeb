import { useState, useEffect } from 'react';
import { NewTask } from './NewTask';
import { NoTask } from './NoTask';
import { Task } from './Task';
import styles from './TaskBox.module.css';
import uuid from 'react-uuid';
import { getList } from "../api";

interface TaskItens{
  id: string;
  content: string;
  isCompleted: boolean;
}
const taskTypes: TaskItens[] = [];

export function TaskBox() { 

  const [tasks, setTasks] = useState(taskTypes);

  const [completedTasks, setcompletedTasks] = useState(tasks.filter(task => {
    return task.isCompleted === true;
  }).length);

  useEffect(() => {
    async function loadToDoList() {
      try {
        const taskitens = taskTypes;  
        const list = await getList();
          
        list.map((item: any) =>{
          taskitens.push({
            id: uuid(),
            content: item.description,
            isCompleted: false 
          });  
        });

        setTasks(taskitens);     
        
      } catch (error) {
        
      }
    }
  
    loadToDoList();
  }, []);

  function onChangeCheckTask(taskId: string){
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

  function onAddTask(content: string) {
    setTasks([...tasks, {id: uuid(),
                        content: content,
                        isCompleted: false}]);
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