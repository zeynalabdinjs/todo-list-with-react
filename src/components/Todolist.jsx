import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todolist = () => {
    const todos = useSelector(state => state.todos.data)
    console.log(todos)

    return (
        <div className='todo-list d-flex flex-column align-items-center py-2'>
            {
                todos && todos.map((item, index) => (
                    <Todo title={item.content} key={index} id={item.id} />
                ))
            }
        </div>
    )
}

export default Todolist