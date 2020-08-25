import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
import  NewTodoForm from './NewTodoForm'


const TodoList = () => {
    // set the state
    const INITIAL_STATE = [
        {id: uuid(), task: 'clean the house', done: false},
        {id: uuid(), task: 'cook lunch', done: false},
        {id: uuid(), task: 'code', done: false},
    ]

    const [todos, setTodos] = useState(INITIAL_STATE)

    // delete todo
    const handleDelete = (e) => {
        let newTodos = todos.filter(todo => todo.id !== e.target.parentElement.id)
        setTodos(newTodos)
    }
    // add a todo
    const handleAdding = (todos) => {
        setTodos(data=> [...data, {id:uuid(), ...todos}] )

    }
    // toggle a todo
    const handleToggle = (e) => {
         //style
        const li = e.target
        li.style.textDecoration === 'line-through' ? li.style.textDecoration = 'none' :
            li.style.textDecoration = 'line-through'
        let button = li.children[0]
        if (button) {
            let newTodos = todos.map(todo => (
                todo.id === li.id ?
                    todo = {
                        ...todo,
                        done: !todo.done
                    }
                    : todo))
            console.log(newTodos)
            setTodos(newTodos)

        }
        else{ return}


    }
    return (
        <>
            <NewTodoForm submit={handleAdding}/>
            <div>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        task={todo.task}
                        done={todo.done}
                        id={todo.id}
                        remove={ handleDelete}
                        finished = {handleToggle}
                    />

                )
                )}
            </div>
            </>
    )

}

export default TodoList