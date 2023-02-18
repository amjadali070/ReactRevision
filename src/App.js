import logo from './logo.svg';
import './App.css';


function App() {
  const list = [
    {
      fisrtname: "Amjad",
      lastname: "Ali",
      age: "23"
    }
  ]
  const username = "Ali"
  return (
    <div className='App'>
      <h1>Lareb Appa Khati hai Pappa {username === "Amjad" ? username : "Kuch Nhi"}</h1>
      <h1>Direct Expression :  {6*3}</h1>
      
      {list.map((listItem) => {
        return (
          <>
          <h1>F/Name: {listItem.fisrtname}</h1>
          <h1>L/Name: {listItem.lastname}</h1>
          <h1>Age: {listItem.age}</h1>
          </>
        )
      })}
      
    </div>
  );
}

export default App;
