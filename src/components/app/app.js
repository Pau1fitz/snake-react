import React from 'react';
import Game from '../game';
import CardDeck from '../cardDeck';

import './app.css';

function App() {

  const cards = CardDeck();

  return (
    <div className="app">

      <Game cards={cards} />

    </div>
  );
}

export default App;
