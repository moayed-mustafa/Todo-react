import React from 'react'



const Todo = ({task, done, id, remove, finished }) => {

    return (
        <ul>
            <li
                data-testid= {task}
                onClick = {finished}
                id={id}>{task}
                <button onClick={remove}>X</button>
            </li>
        </ul>
    )
}

export default Todo