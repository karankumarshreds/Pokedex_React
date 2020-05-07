import React from 'react';
import './App.css';
//components
import Pokedex from './Pokedex/Pokedex';
import Pokegame from './Pokegame/Pokegame'

function App() {
  return (
    <div className="App">
      <h1 className="App-title">
        POKEDEX GAME
      </h1>
      <Pokegame/>
    </div>
  );
}

export default App;
