import React from "react";
import { ToDo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './stylesheet.css'

type Props = {
    task: ToDo;
    key: number;
    allTasks: ToDo[];
    setAllTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;

}


const SingleTask: React.FC<Props> = ({ task, allTasks, setAllTasks }) => {

    return (
        <form className="todos-single">
            <span className="todos-single-text">
                {task.todo}
            </span>
            <div>
                <span className="icon"><AiFillEdit /></span>
                <span className="icon"><AiFillDelete /></span>
                <span className="icon"><MdDone /></span>
            </div>
        </form>
    )

}

export default SingleTask
