import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter]= useState(5)
  // let counter = 5;
  let addvalue = ()=>{
    // counter = counter+1
    setCounter(counter+1)
    console.log("clicked",counter)
  }

  let removeValue =() =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>first project</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
