constructor(props) {
  super(props);

  this.state = {
    turn: 'player',
    cards: props.cards,
    aiCards: [],
    humanCards: [],
    cardsRemaining: 52,
    humanScore: 0,
    aiScore: 0,
    winner: null,
    playerStick: false
  };

  this.dealCard = this.dealCard.bind(this);
  this.playerStick = this.playerStick.bind(this);
}

randomNumber() {
  return Math.floor(Math.random() * this.state.cardsRemaining);
}

playerStick() {

  this.setState({
    playerStick: true
  });

  setInterval(() => {
    this.dealCard();
  }, 1000);

}

dealCard() {
  const randomNumber = this.randomNumber();
  let cards = this.state.cards;
  let cardsRemaining = this.state.cardsRemaining - 1;
  let cardValue = parseInt(cards[randomNumber].value, 10);

  if(isNaN(cardValue)) {
    cardValue = 11;
  }

  if(this.state.turn === 'player' && !this.state.winner && !this.state.playerStick) {

    let humanCards = [...this.state.humanCards, cards[randomNumber]];
    let humanScore = cardValue + this.state.humanScore;


    if(humanScore == 21) {

      this.setState({
        winner: 'human'
      });

    }
    else if(humanScore > 21) {

      this.setState({
        winner: 'computer',
        humanCards,
        humanScore: 'Bust'
      });

    } else {

      this.setState({
        turn: 'computer',
        humanCards,
        cardsRemaining,
        humanScore
      });

    }


  } else if(!this.state.winner && this.playerStick) {

    let aiCards = [...this.state.aiCards, cards[randomNumber]];
    let aiScore = cardValue + this.state.aiScore;

    if(aiScore == 21) {
      this.setState({
        winner: 'computer'
      })
    }

    else if(aiScore > 21) {

      this.setState({
        winner: 'human',
        aiCards,
        aiScore: 'Bust'
      });

    }

    this.setState({
      turn: 'player',
      aiCards,
      cardsRemaining,
      aiScore
    });
  }

  cards.splice(randomNumber, 1);
}

render() {

  const { aiCards, humanCards, turn , aiScore, humanScore, winner} = this.state;

  return (
    <div>
      <h2>Computer Score {aiScore}</h2>
      {aiCards.map(card => {
        return (
          <div key={`${card.suit + card.value}`} className="card-container">
            <Card suit={card.suit} value={card.value} />
          </div>
          );
      })}

      <h2>Player Score {humanScore}</h2>
      {humanCards.map(card => {
        return (
          <div key={`${card.suit + card.value}`} className="card-container">
            <Card suit={card.suit} value={card.value} />
          </div>
          );
      })}

      <div>
        <Text>{turn}</Text>
      </div>

      {this.state.winner && (
        <div>
          <Text>The winner is the {winner} </Text>
        </div>
      )}

      <Button clickHandler={this.dealCard}>Hit</Button>
      <Button clickHandler={this.playerStick} color="tertiary">Stick</Button>
    </div>
  );
}
