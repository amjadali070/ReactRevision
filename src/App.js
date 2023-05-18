import './App.css';
import Tool from "./Components/Tool" 
import Time from './Components/Time';
import Counter from './Components/Counter';
import ExampleComponent from './DidMount';
import MyForm from './Components/MyForm';


// Props
const name ="Amjad"
const tool= "EaseWeb"
function App() {
  return (
    <div className="App">
      <Tool name={name} tool={tool}/>
      <Time/>
      <Counter/>
      <ExampleComponent/>
      <MyForm/>
    </div>
  )
}





  // function App() {
  // const list = [
  //   {
  //     fisrtname: "Amjad",
  //     lastname: "Ali",
  //     age: "23"
  //   }
  // ]
  // const username = "Ali"
  // return (
  //   <div className='App'>
  //     <h1>Lareb Appa Khati hai Pappa {username === "Amjad" ? username : "Kuch Nhi"}</h1>
  //     <h1>Direct Expression :  {6*3}</h1>
      
  //     {list.map((listItem) => {
  //       return (
  //         <>
  //         <h1>F/Name: {listItem.fisrtname}</h1>
  //         <h1>L/Name: {listItem.lastname}</h1>
  //         <h1>Age: {listItem.age}</h1>
  //         </>
  //       )
  //     })}
      
  //   </div>
  // );
  // }

  
  
  export default App

