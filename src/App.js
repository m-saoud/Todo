
import './App.css';
import TodoForm from './Components/todoForm'
import { React, useState } from 'react'
import Todo from './Components/todo'


function App() {
  let [todos, setTods] = useState([])
  let [todoshow,settodoShow]= useState("all")
  let [toggleAllcomplet,settoggleAllcomplet]= useState(true)
  let addTodo = (todo) => {
    setTods([todo,...todos])
  }
  
  const updateTodoShow = (s) => {
    settodoShow(s) 

  }


  const remoAllCompTodos = () => {
    setTods(todos.filter((todo)=>!todo.complete))
  }
  
  const togglComplete = (id) => {

    setTods(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete:!todo.complete, 
          
        }
      } else {
        return todo
      }
    })) 
    
    

  }

  if (todoshow === 'active') {
   todos= todos.filter((todo)=>!todo.complete)
    
  } else if (todoshow === 'complete') {
    todos= todos.filter((todo)=>todo.complete)  
  }

  const handlDelet = (id) => {
    setTods(todos.filter((todo)=>todo.id !== id ))
  }


  return (
    <div className='container'><TodoForm onSubmit={addTodo}/>
    
      {
        todos.map((todo) => 
          <Todo
            key={todo.id}
            todo={todo}
            onDel={() => handlDelet(todo.id)}
            togglComplete={()=>togglComplete(todo.id)
            }

            />
        )
    }
      <div>
        <button onClick={()=>updateTodoShow('all')}>All</button>
        <button onClick={()=>updateTodoShow('active')}>Active</button>
        <button onClick={()=>updateTodoShow('complete')}>Complete</button>
    </div>
      <button className='all-btn btn ' onClick={remoAllCompTodos}>Rmove All Complete Todo</button>
      <button className='all-btn btn ' onClick={() => {
        setTods(
          todos.map((todo) => ({
            ...todos,
            complete:togglComplete
          }))

        )
        settoggleAllcomplet(!togglComplete)
      }}>Toggle All Complete Todo:{`${toggleAllcomplet}`}</button>
    
    </div>
  
  )
}

export default App;
