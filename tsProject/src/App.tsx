import { useState } from 'react'
import './App.css'
import InputField from './components/inputField'
import ToDoList from './components/toDoList'
import { ToDo } from './model'


const App: React.FC = () => {

  const [todo, setToDo] = useState<string>('')
  const [allTasks, setAllTasks] = useState<ToDo[]>([])

  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setAllTasks([...allTasks, { id: Date.now(), todo, isDone: false }])
      setToDo('')
    }
  }

  return (
    <div className="App">
      <span className='heading'>
        Taskify
      </span>
      <InputField toDo={todo} setToDo={setToDo} handleAdd={HandleAdd} />
      <ToDoList allTasks={allTasks} setAllTasks={setAllTasks} />
    </div>
  )
}

export default App
