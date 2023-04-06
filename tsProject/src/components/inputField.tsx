import React from 'react'
import './inputField.css'

const InputField: React.FC = () => {


    return (
        <form className='input'>
            <input type='input' placeholder='Enter A Task' className='input-box'></input>
            <button className='input-submit' type='submit'> Add </button>
        </form>

    )
}

export default InputField
