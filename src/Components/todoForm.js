import { React, useState } from 'react'
import shortid from 'shortid';

const TodoForm = (props) => {

    const [text, setText] = useState("")
    // const Todo = ({ todo }) => {
    //     return <div key={todo.id}>{todo.text}</div>;
    //   };
    const handlSubmit = (e) => {
         e.preventDefault()
        props.onSubmit({
            id:shortid.generate(),
            text:text,
            complete:false
       
        })
        setText('')
    }
    const handlChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form onSubmit={handlSubmit}>
          
            <input className='input-field input-group-text mb-3'
                type='text'
                onChange={handlChange}
                placeholder="Enter todo text"
                value={text}>
            </input>
            <button className='btn btn-primary d-flex' type='submit' onClick={handlSubmit}>Addtdo</button>
        </form>
    )
}

export default TodoForm
