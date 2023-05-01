export const addTodo = (data)=>{
    return{
        type:'addTodo',
        payload:data,
    }
}

export const changeIsCompleted = (data,index)=>{
    return{
        type:'isComplete',
        payload:{
            data,
            index,
        },
    }
}

export const searchInputChange = (data)=>{
    return{
        type:'search',
        payload:data,
    }
}

export const priorityInputChange =(data)=>{
    return{
        type:'priority',
        payload:data,
    }
}

export const progressInputChange =(data)=>{
    return{
        type:'progress',
        payload:data,
    }
}

export const deleteTodo =(data)=>{
    return{
        type:'delete',
        payload:data,
    }
}