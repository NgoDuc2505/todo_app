import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
export default function TodoView() {
    let inputEle = useRef()
    let date = new Date;
    const minute = ` ${date.getHours()}:${date.getMinutes()}, ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const dispatch = useDispatch();
    let [nameTodo,setNameTodo] = useState('')
    let [priorityChange,setPriority] = useState('medium')
    let [bgColor,setBgColor] = useState('#9dc9f8');
    const handleSelectTagColor =(e)=>{
        e.target.value === 'Medium' ? setBgColor('#9dc9f8') : (e.target.value === 'High' ? setBgColor('#ddb1b5') : setBgColor('#b7bec4'))
        setPriority(e.target.value)
    }
    const handleInputChange =(e)=>{
        setNameTodo(e.target.value)
    }
    const handleAddTodo =()=>{
        dispatch(addTodo({
            id: uuidv4(),
            isCompleted: false,
            todoName: nameTodo,
            priority: priorityChange,
            minute,
        }))
        setNameTodo('')
        inputEle.current.focus()
    }
    return (
        <div className='todoAddBar'>
            <div className="content d-flex">
                <div className="input-group flex-nowrap w-50 ">
                    <input ref={inputEle} type="text" className="form-control" placeholder="Todo..." onChange={handleInputChange} value={nameTodo} />
                </div>
                <div className="priorities w-50">
                    <div className="input-group mb-3">
                        <select onChange={handleSelectTagColor} style={{backgroundColor:`${bgColor}`,}} defaultValue={priorityChange} className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option className='bg-danger' value='high'>High</option>
                            <option className='bg-info' value='medium'>Medium</option>
                            <option className='bg-secondary' value='low'>Low</option>
                        </select>
                        <button className="btn btn-primary" type="button" onClick={handleAddTodo}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
