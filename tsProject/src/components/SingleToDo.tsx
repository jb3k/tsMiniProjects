import React, { useState, useEffect, useRef } from "react";
import { ToDo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './stylesheet.css'
import { Draggable } from "react-beautiful-dnd";

type Props = {
    index: number
    task: ToDo;
    allTasks: ToDo[];
    setAllTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;

}


const SingleTask: React.FC<Props> = ({ index, task, allTasks, setAllTasks }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task.todo)

    //this makes sure you can focus on the edit form when you click on the edit button
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);


    const handleTaskFinished = (id: number) => {
        setAllTasks(allTasks.map((task) =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ))

    }

    const handleDelete = (id: number) => {
        setAllTasks(allTasks.filter((task => task.id !== id)))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setAllTasks(allTasks.map((todo) =>
            todo.id === id ? { ...task, todo: editTask } : task
        ))
        setEdit(false)
    }

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos-single ${snapshot.isDragging ? "drag" : ""}`}
                    onSubmit={(e) => { handleEdit(e, task.id) }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (
                        <input
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                            className="todos-single-text"
                            ref={inputRef}
                        />
                    ) : task.isDone ? (
                        <s className="todos-single-text"> {task.todo}</s>
                    ) : (
                        <span className="todos-single-text">{task.todo}</span>
                    )}
                    <div>
                        <span className="icon" onClick={() => {
                            if (!edit && !task.isDone) { setEdit(!edit) }
                        }}
                        >
                            <AiFillEdit />
                        </span>

                        <span className="icon" onClick={() => { handleDelete(task.id) }}><AiFillDelete /></span>
                        <span className="icon" onClick={() => { handleTaskFinished(task.id) }}> <MdDone /></span>
                    </div>
                </form>
            )}
        </Draggable>
    )

}

export default SingleTask
