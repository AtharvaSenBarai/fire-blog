import React from 'react';
import './index.css';

const StatusText = ({positive, text}) => (
  <p style={{color: positive ? 'green' : 'crimson'}} className="status-text">
    {text}
  </p>
);

export default StatusText;
