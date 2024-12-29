import React from 'react'
import {TodoItem} from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className="my-4">Todos List</h3>
      {props.todos.length===0?(
      <div className="alert alert-primary" role="alert">
        No Todos To Show
      </div>
      ): 
      props.todos.map((todo) =>{
        return (
        <> 
        <TodoItem todo={todo} onDelete={props.onDelete}/>
        </> 
        )
      })}
      
    </div>
  )
}

export default Todos
