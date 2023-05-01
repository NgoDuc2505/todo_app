import React, { useEffect } from 'react'
import './todoList.css'
import { useSelector, useDispatch } from 'react-redux'
import { initState } from '../../redux/reducers'
import { changeIsCompleted, deleteTodo } from '../../redux/actions'
import { todoListSelector } from '../../redux/selectors'
import { handleGetDataFromLocal } from '../../local_storage/localStorage'
export default function TodoList() {
    const dispatch = useDispatch()
    const handleChecked = (e)=>{
        dispatch(changeIsCompleted(e.target.checked,e.target.id))
    }
    const handleDeleteTodo = (index,id)=>{
        dispatch(deleteTodo({
            index,
            id,
        }))
    }
    let todoListLocal = handleGetDataFromLocal()
    const todoList = useSelector(todoListSelector)
    const handleRenderTodoItem = (array)=>{
       return array.map((item,index) =>{
            return (
                <div className={`todoItem ${item.isCompleted ? 'checked' : ''}`} key={item.id}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input id={index} onChange={handleChecked} checked={item.isCompleted? true : false} type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                    </div>
                    <div className="todo-content d-flex form-control justify-content-between">
                    <p className='todo-name'>{item.todoName}</p>
                    <span>{item.minute} <i className="fa-solid fa-trash" onClick={()=>{handleDeleteTodo(index,item.id)}}></i> </span>
                    </div>
                    <p className='form-control text-center priorityOfItem'>{item.priority}</p>
                </div>
            </div>
            )
        })
    }
    return (
        <div className='todoList'>
            <h4 className='text-white'>List:</h4>
            {todoList?.length > 0
            ? handleRenderTodoItem(todoList) 
            : handleRenderTodoItem((todoListLocal ? todoListLocal : initState.todoList))}
        </div>
    )
}
