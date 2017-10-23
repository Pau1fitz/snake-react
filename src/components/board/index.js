import React from 'react';
import './board.css';

export default ({height, width}) => {

  let board = [];
  for(let i = 0; i < height; i++) {
    board.push(Array(width).fill(''))
  }

  return (
    <div className="board">

      {board.map((row, index) => {
        return (
          <div className='row' key={index}>
          {
            row.map((cell, index) => {
              return (
                <div className='cell' key={index}>{cell}</div>
              );
            })
          }
          </div>
        );
      })}
    </div>
  )

}
