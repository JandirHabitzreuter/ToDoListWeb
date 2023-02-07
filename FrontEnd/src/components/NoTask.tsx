import styles from './NoTask.module.css';
import clipboard from '../assets/Clipboard.svg';

export function NoTask() {
  return (
    <div className={styles.noTasks}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}