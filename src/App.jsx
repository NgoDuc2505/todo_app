
import './App.css'
import Sort from './modules/sort_system/Sort'
import TodoList from './modules/todo_viewport/TodoList'
import TodoView from './modules/todo_viewport/TodoView'

function App() {
  return (
    <div className='appWrapper'>
     <div className="mainApp">
      <h2>Todo List</h2>
      <TodoView/>
      <TodoList/>
      <Sort/>
     </div>
    </div>
  )
}

export default App
