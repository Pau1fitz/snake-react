import React,  { Component } from 'react';
import Board from '../board';
import Snake from '../snake';
import Food from '../food';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      snakeLeftPos: 1,
      snakeTopPos: 1,
      boardWidth: 25,
      boardHeight: 25,
      snakeLength: 1,
      snakeDirection: 'up',
      foodTopPosition: (Math.floor(Math.random() * 20) * 22) + 1,
      foodLeftPosition: (Math.floor(Math.random() * 20) * 22) + 1,
    }

    this.changeDirection = this.changeDirection.bind(this);
  }


  componentDidMount() {

    document.onkeydown = this.changeDirection;

    setInterval(() => {

      this.startGame();

    }, 100);

  }

  changeDirection(e) {

    const { snakeDirection } = this.state;

    if(e.keyCode === 37 && snakeDirection !== 'right') {
      this.setState({
        snakeDirection: 'left'
      });
    } else if (e.keyCode === 38 && snakeDirection !== 'down') {
      this.setState({
        snakeDirection: 'up'
      });
    } else if (e.keyCode === 39 && snakeDirection !== 'left') {
      this.setState({
        snakeDirection: 'right'
      });
    }  else if (e.keyCode === 40 && snakeDirection !== 'up') {
      this.setState({
        snakeDirection: 'down'
      });
    }
  }

  startGame() {

    const {
      snakeDirection,
      snakeLeftPos,
      snakeTopPos,
      foodTopPosition,
      foodLeftPosition,
      boardHeight,
      boardWidth
    } = this.state;

    if(snakeTopPos === foodTopPosition && snakeLeftPos === foodLeftPosition) {
      this.setState((prevState) => {
        return {
          snakeLength: prevState.snakeLength + 1,
          foodTopPosition: (Math.floor(Math.random() * 20) * 22) + 1,
          foodLeftPosition: (Math.floor(Math.random() * 20) * 22) + 1
        }
      })
    }

    if (snakeDirection === 'right') {
      this.setState((prevState) => {
        if(prevState.snakeLeftPos >= (boardWidth - 1) * 22) {
          return {
            snakeLeftPos: 1
          }
        }
        return {
          snakeLeftPos: prevState.snakeLeftPos + 22
        }
      });

    } else if(snakeDirection === 'left') {
      this.setState((prevState) => {
        if(prevState.snakeLeftPos <= 1) {
          return {
            snakeLeftPos: ((boardWidth - 1) * 22) + 1
          }
        }
        return {
          snakeLeftPos: prevState.snakeLeftPos - 22
        }
      });
    }

    else if(snakeDirection === 'down') {
      if(snakeTopPos >= boardHeight * 21) {
        this.setState((prevState) => {
          return {
            snakeTopPos: 1
          }
        });

      } else {
        this.setState((prevState) => {
          return {
            snakeTopPos: prevState.snakeTopPos + 22
          }
        });
      }
    }

    else if(snakeDirection === 'up') {
      this.setState((prevState) => {
        if(snakeTopPos <= 1) {
          return {
            snakeTopPos: (boardHeight * 21) + 4
          }
        } else {
          return {
            snakeTopPos: prevState.snakeTopPos - 22
          }
        }
      });
    }
  }

  render() {

    const {
      snakeLeftPos,
      snakeTopPos,
      foodTopPosition,
      foodLeftPosition,
      snakeLength,
      snakeDirection
    } = this.state;

    return (
      <div>
        <Board height={25} width={25} />
        <Snake direction={snakeDirection} length={snakeLength} left={snakeLeftPos} top={snakeTopPos} />
        <Food left={foodLeftPosition} top={foodTopPosition} />
      </div>
    )
  }
}

export default Game;
