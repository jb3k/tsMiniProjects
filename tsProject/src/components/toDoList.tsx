import React from "react";
import { ToDo } from "../model";
import SingleTask from "./SingleToDo";
import './stylesheet.css'
import { Droppable } from "react-beautiful-dnd";


interface Props {
    allTasks: ToDo[];
    setAllTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedTasks: ToDo[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const ToDoList: React.FC<Props> = ({ allTasks, setAllTasks, completedTasks, setCompletedTasks }) => {

    return (
        <div className="container">
            <Droppable droppableId="ToDosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <span className="todos-heading">
                            Active Tasks
                        </span>
                        {allTasks.map((task, index) =>
                            <SingleTask
                                index={index}
                                task={task}
                                key={task.id}
                                allTasks={allTasks}
                                setAllTasks={setAllTasks} />
                        )}
                        {provided.placeholder}
                    </div>

                )}
            </Droppable>
            <Droppable droppableId="ToDosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos  ${snapshot.isDraggingOver ? "dragcomplete" : "remove"}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <span className="todos-heading">
                            Completed Tasks
                        </span>
                        {completedTasks.map((task, index) =>
                            <SingleTask
                                index={index}
                                task={task}
                                key={task.id}
                                allTasks={completedTasks}
                                setAllTasks={setCompletedTasks} />
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default ToDoList
