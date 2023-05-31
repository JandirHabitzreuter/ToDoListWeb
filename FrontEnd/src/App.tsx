import { Header } from './components/Header'
import { TaskBox } from './components/TaskBox'
import './global.css'
import styles from './App.module.css';

function App() { 

  return (
    <div>
      <Header />  

      <main className={styles.app}>
        <TaskBox />        
      </main>    
    </div>
  )
}

export default App
