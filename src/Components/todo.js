import React from 'react'

function Todo (props) {
  return (
    <div className =''>
         <div style={{textDecoration: props.todo.complete ? "Line-through" : "" }} onClick={props.togglComplete}>{props.todo.text}
      </div>
      <button className='del'onClick = {props.onDel}>x</button>
    
    </div>
  )
}

export default Todo