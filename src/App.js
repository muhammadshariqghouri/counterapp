import React, { useState } from 'react';
import piaic from './piaic.png';
import './App.css';
import { Message } from './Message.js' 

function App() {
  let [count, setCount] = useState(1)
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`'box' ${isMorning ? 'dayLight' : ''}`}>
      <header className="App-header">
        <img src={piaic} className="App-logo" alt="piaic" /></header>
        
      <message counter={count} />

      <h1>Name: Muhammad Shariq Bilal Ghouri</h1>
      <h2>My 4th Assignment Done</h2>


      <hr/>
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      {/* <h2>Counter Variable is: {count}
      </h2> */}
      <Message counter={count} />
      <button onClick={
        ()=> setCount(count + 1)
        }>
          
          Forward Counter
        
        </button>
        <br/>

        <button onClick={
        ()=> setCount(count - 1)
        }>
          
          Backward Counter
        
        </button>
        <br/>

        <button onClick={
          ()=> setMorning(!isMorning)}>Update Day</button>
        
        <br/>

      
    </div>
  );
}

export default App;
