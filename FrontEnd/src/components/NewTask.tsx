import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface NewTaskProps{
  onAddTask: (content: string) => void;
}

export function NewTask({onAddTask}:NewTaskProps) {

  const [newTaskContent, setNewTaskContent] = useState('')

  const isNewTaskContentEmpty = newTaskContent.length === 0;

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTaskContent);

    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskContent(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  return (
    <form onSubmit={handleAddTask} className={styles.newtask}>
      <textarea
        name="newtask"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        value={newTaskContent}
      />

      <button type='submit' disabled={isNewTaskContentEmpty}>
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}