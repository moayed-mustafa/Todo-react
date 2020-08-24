import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


const NewTodoForm = ({submit}) => {
    // set the state of the form
    const [formData, setFormData] = useState({ task: '', done:false })
    // monitor the change of the formdata and change state
    const changeForm = (e) => {
        e.persist()
        const {value, name} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
       }))
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formData)
        setFormData({ task: '', done:false })
    }
    return (
        <form
        onSubmit={handleSubmit}>
            <label htmlFor='todo' style={{marging:10}}>Todo: </label>
            <input type='text' name='task' id='todo' value={formData.task} onChange={changeForm}></input>
            <button>Add</button>
        </form>
    )

}

export default NewTodoForm