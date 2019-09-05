import React,{useState} from 'react';
import './App.css';
// import useCount from './hooks/useCount.js';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'


function App() {
  // const [count,setStrikes,setBalls]=useCount();
  const [strikes,setStrikes]=useState(0);
  const [balls,setBalls]=useState(0);
  
  const handleStrikes=(e)=>{
    if (strikes===2){
      setStrikes(0);
    } else {
      setStrikes(strikes+1);
    }
}

const handleBalls=(e)=>{
    setBalls(balls+1);
}
  return (
    <div className="App">
        <h1>Baseball Thing</h1>
        <Display strike={strikes} ball={balls} />
        <Dashboard setStrikes={handleStrikes} setBalls={handleBalls} />
    </div>
  );
}

export default App;
