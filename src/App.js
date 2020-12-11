import React from 'react'
import Board from './components/Board';
import Navbar from './components/Navbar'
import './App.css';

const App = () => {

  const n = parseInt(window.prompt('Enter the value of n'));

  return (
    <div className="App"  >
      <Navbar />
      <Board size={ (n > 4 && n != undefined) ? n : 5 } />
    </div>
  );
}

export default App;
