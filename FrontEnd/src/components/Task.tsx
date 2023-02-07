import styles from './Task.module.css';
import check from '../assets/check.svg';
import checked from '../assets/checked.svg';
import checkHover from '../assets/checkHover.svg';
import checkedHover from '../assets/checkedHover.svg';
import { Trash } from 'phosphor-react';

interface TaskProps{
  id: string;
  content: string;
  isCompleted: boolean;
  onCheckTask: (id: string) => void;
  onUncheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, content, isCompleted, onCheckTask, onUncheckTask, onDeleteTask }:TaskProps) {

  function handleCheckTask(){
    onCheckTask(id)
  }
  
  function handleUncheckTask(){
    onUncheckTask(id)
  }

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  return (
    <div className={styles.tasks}>
      {isCompleted ? 
      (
        <div className={styles.task}>
          <img 
            src={checked} 
            onMouseOver={img => (img.currentTarget.src = checkedHover)}
            onMouseOut={img => (img.currentTarget.src = checked)}
            onClick={handleUncheckTask}
            alt="Tarefa completa" 
          />
          <span className={styles.taskChecked}><s>{content}</s></span>
          <Trash onClick={handleDeleteTask} className={styles.excludeTask} size={24}/>
        </div>
      ) 
      : 
      (
        <div className={styles.task}>
          <img 
            src={check} 
            onMouseOver={img => (img.currentTarget.src = checkHover)}
            onMouseOut={img => (img.currentTarget.src = check)}
            onClick={handleCheckTask}
            alt="Tarefa a fazer" 
          />
          <span className={styles.taskUnchecked}>{content}</span>
          <Trash onClick={handleDeleteTask} className={styles.excludeTask} size={24}/>
        </div>
      )
      }
    </div>
  )
}