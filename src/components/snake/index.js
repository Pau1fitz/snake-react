import React from 'react';
import './snake.css';

export default ({left, top, length, direction}) => {

  const snakeArray = new Array(length).fill('');
  const snakeDirection = {};

  const snake = snakeArray.map((snake, index) => {

    let previousNode = document.getElementsByClassName('snake');

    if(index === 0) {

      snakeDirection[index] = direction;

      return (
        <div key={index} style={{left, top}} className='snake'></div>
      );
    }

    else {
      // get node just before current node
      let left = parseInt(previousNode[index - 1].style.left, 10);
      let top = parseInt(previousNode[index - 1].style.top, 10) - 20;

      let headLeft = parseInt(previousNode[0].style.left, 10);
      let headTop = parseInt(previousNode[0].style.top, 10) - 20;
      // calculate direction
      if(index > 3) {
        var newLeft = parseInt(previousNode[index - 2].style.left, 10);
        var newTop = parseInt(previousNode[index - 2].style.top, 10) - 20;
        if(newLeft > left) {
          snakeDirection[index] = 'left'
        } else if(newLeft < left) {
          snakeDirection[index] = 'right'
        } else if(newTop > top) {
          snakeDirection[index] = 'up'
        } else if (newTop < top) {
          snakeDirection[index] = 'down'
        }

        if(snakeDirection[index] !== direction && newLeft === headLeft && newTop === headTop) {
          console.log('colide');
        }
      }

      return (
        <div key={index} style={{left, top}} className='snake'></div>
      );
    }
  });



  return (
    <div className='snake-container'>
      {snake}
    </div>
  );
}
