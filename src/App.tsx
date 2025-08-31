import './style/navbar.css'
import './style/main.css'
import Header from './Components/header.tsx'
import Member from './Components/member.tsx'
import { useState } from 'react'
import Tasks from './Components/task.tsx'

function App() {
  const [statusNew, setStatus] = useState(true)
  const [tasks,setTasks] = useState<string[]>([])
  return (
    <>
    
      <Header changeStatus={statusNew} setstatus={setStatus}/>
      <Member statusNew={statusNew} setTasks={setTasks}/>
      <Tasks task={tasks}/>
    </>
  )
}

export default App
