import React from "react";
import { ToDo } from "../model";
import SingleTask from "./SingleToDo";
import './stylesheet.css'


interface Props {
    allTasks: ToDo[];
    setAllTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const ToDoList: React.FC<Props> = ({ allTasks, setAllTasks }) => {

    return (
        <div className="todos">
            {allTasks.map((task) => {
                return (
                    <>
                        <SingleTask task={task} key={task.id} allTasks={allTasks} setAllTasks={setAllTasks} />
                    </>
                )
            })}
        </div>
    )
}

export default ToDoList
