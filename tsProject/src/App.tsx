import { useState } from 'react'
import './App.css'
import InputField from './components/inputField'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span className='heading'>
        Taskify
      </span>
      <InputField />

    </div>
  )
}

export default App
