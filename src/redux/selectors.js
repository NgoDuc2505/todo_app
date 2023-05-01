import { handleGetDataFromLocal, handleLocalStorage } from "../local_storage/localStorage";


export const todoListSelector = (state) => {
    handleLocalStorage(state?.todoList)
    const todoListLocal = handleGetDataFromLocal()
    return todoListLocal?.filter((item)=>{
        if(state?.filter?.status == 'all'){
            return state?.filter?.priority.length == 0 ? (item.todoName.includes(state?.filter?.search)) : ((item.todoName.includes(state?.filter?.search)) && state?.filter?.priority.includes(item.priority) )
        }else if(state?.filter?.status == 'done'){
            return state?.filter?.priority.length == 0 ? (item.todoName.includes(state?.filter?.search)) && item.isCompleted : ((item.todoName.includes(state?.filter?.search)) && state?.filter?.priority.includes(item.priority) && item.isCompleted )
        }else{
            return state?.filter?.priority.length == 0 ? (item.todoName.includes(state?.filter?.search)) && !item.isCompleted : ((item.todoName.includes(state?.filter?.search)) && state?.filter?.priority.includes(item.priority) && !item.isCompleted )
        }
    })
};