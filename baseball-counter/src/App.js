import React from 'react';
import './App.css';
import useCount from './hooks/useCount.js';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard.js'


function App() {
  const [count,setStrikes,setBalls]=useCount();
  return (
    <div className="App">
        <h1>Baseball Thing</h1>
        <Display strike={count[0]} ball={count[1]} />
        <Dashboard strike={setStrikes} ball={setBalls} />
    </div>
  );
}

export default App;
