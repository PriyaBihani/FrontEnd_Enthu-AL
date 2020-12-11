import React from 'react'
import Board from './components/Board';
import './App.css';

const App = () => {

  const n = parseInt(window.prompt('Enter the value of n'));

  return (
    <div className="App"  >
      <Board size={ (n > 4 && n != undefined) ? n : 5 } />
    </div>
  );
}

export default App;
