import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect, use } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{ 
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
    if(todos.length===0){
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
  }; 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos)); 
  },[todos])
  return ( 
    <>
    <Router>
    <Header title="My Todos List" searchBar="false" /> 
    <Routes>
      <Route path="/" element={<>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        </>} />
      <Route exact path="/About" element={<About />} />
    </Routes> 
    <Footer /> 
    </Router>
    </>
  );
}

export default App;
