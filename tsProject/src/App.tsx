import { useState } from 'react'
import './App.css'
import InputField from './components/inputField'
import ToDoList from './components/toDoList'
import { ToDo } from './model'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'


const App: React.FC = () => {

  const [todo, setToDo] = useState<string>('')
  const [allTasks, setAllTasks] = useState<ToDo[]>([])
  const [completedTasks, setCompletedTasks] = useState<ToDo[]>([])

  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setAllTasks([...allTasks, { id: Date.now(), todo, isDone: false }])
      setToDo('')
    }
  }


  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = allTasks;
    let complete = completedTasks;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTasks(complete);
    setAllTasks(active);
  };



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>
          Taskify
        </span>
        <InputField
          toDo={todo}
          setToDo={setToDo}
          handleAdd={HandleAdd}
        />
        <ToDoList
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
}

export default App
