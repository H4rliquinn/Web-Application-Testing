import React,{useState} from 'react';
import './App.css';
// import useCount from './hooks/useCount.js';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'


function App() {
  // const [count,setStrikes,setBalls]=useCount();
  const [strikes,setStrikes]=useState(0);
  const [balls,setBalls]=useState(0);
  const [msg,setMsg]=useState("Waiting for the first pitch");
  
  const handleStrikes=(res)=>{
    if (res===1){
      if (strikes===2){
        setMsg("YER OUTTA HERE!");
        setStrikes(0);
        setBalls(0);
      } else {
        setStrikes(strikes+1);
        setMsg(`Strike ${strikes+1}!`);
      }
    } else if(res===-1){
      if (strikes!==2){ 
        setMsg(`Foul Ball! Strike ${strikes+1}!`);
        setStrikes(strikes+1);
      } else {
        setMsg(`Foul Ball! Still Strike ${strikes}!`);
      }
    } else {
      setStrikes(0);
    }

}

const handleBalls=(res)=>{
  if (res===1){
    if (balls===3){
      setMsg("Take your base!");
      setStrikes(0);
      setBalls(0);
    } else {
      setMsg(`Ball ${balls+1}!`);
      setBalls(balls+1);
    }
  } else if (res===-1){
    setMsg(`Batter Hits!`);
    setBalls(0);
  }
}
  return (
    <div className="App">
        <h1>Baseball Thing</h1>
        <h2>{msg}</h2>
        <Display strike={strikes} ball={balls} />
        <Dashboard setStrikes={handleStrikes} setBalls={handleBalls} />
    </div>
  );
}

export default App;
