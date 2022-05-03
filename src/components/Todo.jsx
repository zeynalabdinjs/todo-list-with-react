import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editData, removeData } from '../store/todos'

const Todo = ({ title, id }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(title)
    const [completed, setCompleted] = useState(false)

    const active = completed ? "active" : ""
    const handleEdit = () => {
        setEdit(!edit)
        dispatch(editData({ id, content }))
    }
    return (
        <div className={`todo ps-3 py-2 mb-1 ${active}`} onClick={(e) => setCompleted(!completed)}>
            {
                edit ? (
                    <>
                        <input className='form-control' value={content} onChange={(e) => setContent(e.target.value)} />
                        <div className="icons">
                            <i className='bx bx-x me-2 text-danger' onClick={(e) => dispatch(removeData(id))}></i>
                            <i className='bx bx-check text-success' onClick={(e) => handleEdit()}></i>
                        </div>

                    </>
                )
                    : (<>
                        <span>{content}</span>
                        <div className="icons">
                            <i className='bx bx-x me-2 text-danger' onClick={(e) => dispatch(removeData(id))}></i>
                            <i className='bx bx-pencil text-success' onClick={() => setEdit(!edit)}></i>
                        </div>
                    </>
                    )
            }
        </div>
    )
}

export default Todo