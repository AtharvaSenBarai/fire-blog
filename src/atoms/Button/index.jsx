import React from 'react';
import './index.css';

const Button = ({text, bgColor, func}) => (
  <button style={{backgroundColor: bgColor}} className="button" onClick={func}>
    {text}
  </button>
);

export default Button;
