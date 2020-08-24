import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'



const Todo = ({task, done, id, remove, finished }) => {

    return (
        <ul>
            <li
                onClick = {finished}
                id={id}>{task}
                <button onClick={remove}>X</button>
            </li>
        </ul>
    )
}

export default Todo