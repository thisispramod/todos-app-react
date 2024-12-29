import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) =>{
  console.log("Hi I am Delete of ", todo);
    // This way is not working
    // let index = todos.indexOf(todo);
    // todos.splice(index, true);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    })); 
  }
  const [todos, setTodos] = useState([
    {
      sno : "1",
      title : "Do Plant Water",
      desc : "Have to give water to all plant"
    },
    {
      sno : "2",
      title : "Go to Market",
      desc : "Buy some veggies"
    },
    {
      sno : "3",
      title : "Call and talk to Family",
      desc : "Make a Call to parents"
    },
    {
      sno : "4",
      title : "Read Book",
      desc : "Need to complete 4 Pages of Atomic Habits"
    }
  ]);
  return ( 
    <>
    <Header title="My Todos List" searchBar="false" /> 
    <Todos todos={todos} onDelete={onDelete}/> 
    <Footer /> 
    </>
  );
}

export default App;
