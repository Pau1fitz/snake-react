import React, {PropTypes} from 'react';

import './button.css';

function Button({ type, children, clickHandler }) {
  return (
    <button onClick={clickHandler} className={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  clickHandler: PropTypes.func
};

export default Button;
