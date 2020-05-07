import React from 'react';
import './App.css';
//components
import Rolldice from './Rolldice/Rolldice';
import Pokegame from './Pokegame/Pokegame';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">
        POKEDEX GAME
      </h1>
      <Rolldice/>
      <Pokegame/>
    </div>
  );
}

export default App;
