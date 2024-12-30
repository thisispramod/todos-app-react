import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
  console.log("Hi I am Delete of ", todo);
    // This way is not working
    // let index = todos.indexOf(todo);
    // todos.splice(index, true);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    })); 
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) =>{
    let sno;
    if(todos.length==0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
  }; 
  const [todos, setTodos] = useState(initTodo);
  return ( 
    <>
    <Header title="My Todos List" searchBar="false" /> 
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/> 
    <Footer /> 
    </>
  );
}

export default App;
