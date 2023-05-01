import { handleGetDataFromLocal, handleLocalStorage } from "../local_storage/localStorage";

export const initState = {
    filter:
    {
        search: '',
        priority: [],
        status: 'all',
    },
    todoList:
        [
            {
                id: '1',
                isCompleted: false,
                todoName: 'Say hello to World!',
                priority: 'medium',
                minute: '',
            },
            {
                id: '2',
                isCompleted: true,
                todoName: 'See my own Todo app',
                priority: 'high',
                minute: '',
            },
            {
                id: '3',
                isCompleted: false,
                todoName: 'Create a first todo',
                priority: 'low',
                minute: '',
            }

        ],
};

const rootReducer = (state = initState, action) => {
    let localTodoArray = handleGetDataFromLocal()
    if (localTodoArray) {
        state = {
            ...state,
            todoList: [
                ...localTodoArray
            ]
        }
    }
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload,
                ]
            }

        case 'isComplete':
            {
                let index = action.payload.index;
                let data = action.payload.data;
                !data ? state.todoList[index].isCompleted = false : state.todoList[index].isCompleted = true;
                return {
                    ...state,
                    todoList: [
                        ...state.todoList
                    ]
                }
            }

        case 'search':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload,
                }
            }
        case 'priority':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    priority: action.payload
                }
            }
        case 'progress':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload,
                }
            }
        case 'delete':
           { 
            for(let key of state.todoList){
                if(key.id === action.payload.id){
                    state.todoList.splice(state.todoList.indexOf(key),1)
                    handleLocalStorage(state.todoList)
                    alert('Xóa thành công!')
                }
            }
            return{
                ...state,
                todoList:[
                    ...handleGetDataFromLocal(),
                ]
            }
            }
        default:
            break;
    }
}

export default rootReducer;