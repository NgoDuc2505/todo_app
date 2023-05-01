import React, { useEffect, useState } from 'react'
import './sort.css';
import { searchInputChange, priorityInputChange,progressInputChange} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Sort() {
    let date = new Date;
    const dispatch = useDispatch();
    let [priorities,setPriorities] = useState([])
    const handleSearchInputChange =(e)=>{
        dispatch(searchInputChange(e.target.value))
    };
    const handlePriorityChange = (e)=>{
        if(e.target.checked && !priorities.includes(e.target.id)){
            priorities = [...priorities,e.target.id]
        }else if(priorities.includes(e.target.id)){
            priorities.splice(priorities.indexOf(e.target.id),1)
        }
        setPriorities(priorities)
        dispatch(priorityInputChange(priorities))
    }
    const handleProgressChange = (e)=>{
        dispatch(progressInputChange(e.target.id))
    }
    
    return (
        <div className='sortSystem'>
            <div className="sort_content">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Text to find..." aria-label="Find" aria-describedby="basic-addon1" onChange={handleSearchInputChange}/>
                    <div className="input-group-prepend">
                        <span className="form-control" id="basic-addon1" ><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className="row row_wrapper">
                    <div className="col-6 d-flex multiple_select">
                        <div className="multiple_select_item">
                            <input className='mx-1' type="checkbox" id='high' onChange={handlePriorityChange}/>
                            <label htmlFor="high">High</label>
                        </div>
                        <div className="multiple_select_item">
                            <input className='mx-1' type="checkbox" id='medium' onChange={handlePriorityChange}/>
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div className="multiple_select_item">
                            <input className='mx-1' type="checkbox" id='low' onChange={handlePriorityChange}/>
                            <label htmlFor="low">Low</label>
                        </div>
                    </div>
                    <div className="col-6 selected_progress">
                    <div className="multiple_select_item">
                            <input className='mx-1' type="radio" name='radio' id='all' value='all' onChange={handleProgressChange}/>
                            <label htmlFor="all">All</label>
                        </div>
                        <div className="multiple_select_item">
                            <input className='mx-1' type="radio" name='radio' id='done' value='done' onChange={handleProgressChange}/>
                            <label htmlFor="done">Completed</label>
                        </div>
                        <div className="multiple_select_item">
                            <input className='mx-1' type="radio" name='radio' id='not' value='not' onChange={handleProgressChange}/>
                            <label htmlFor="not">In progress</label>
                        </div>
                    </div>
                    <div className="col text-center text-black">
                        <h3>{`${date.getHours()} : ${date.getMinutes()}`}</h3>
                        <h4>{`${date.getMonth() + 1}/ ${date.getDate()}`}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
