import React from 'react';
import './snake.css';

export default ({left, top, length, direction}) => {

  const snakeArray = new Array(length).fill('');
  const snake = snakeArray.map((snake, index) => {
    let previousNode = document.getElementsByClassName('snake');
    if(index === 0) {
      return (
        <div key={index} style={{left, top}} className='snake'></div>
      );
    }
    else {
      let left = parseInt(previousNode[index - 1].style.left, 10);
      let top = parseInt(previousNode[index - 1].style.top, 10) - 20;
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
