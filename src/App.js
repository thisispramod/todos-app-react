import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
function App() {
  const onDelete = ((todo) =>{
  console.log("Hi I am Delete of ", todo);
  });
  let todos = [
    {
      sno : "1",
      title : "My Name is Khan",
      desc : "And I am not a terrist"
    },
    {
      sno : "2",
      title : "Go to Market",
      desc : "Buy some veggies"
    },
    {
      sno : "3",
      title : "9793820174",
      desc : "I have to call mom"
    }
  ]
  return ( 
    <>
    <Header title="My Todos List" searchBar="false" /> 
    <Todos todos={todos} onDelete={onDelete}/> 
    <Footer /> 
    </>
  );
}

export default App;
