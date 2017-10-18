import React, {PropTypes} from 'react';
import './text.css';

function Text({ type, children }) {
  return (
    <p className={type + ' text'}>
      {children}
    </p>
  );
}

Text.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
