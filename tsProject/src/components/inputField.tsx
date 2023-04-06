import React, { useRef } from 'react'
import './stylesheet.css'

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                type='input'
                value={toDo}
                placeholder='Enter A Task'
                className='input-box'
                onChange={e => setToDo(e.target.value)}
            ></input>
            <button className='input-submit' type='submit'> Add </button>
        </form >

    )
}

export default InputField
