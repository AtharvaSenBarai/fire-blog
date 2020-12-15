import React from 'react';
import './index.css';

const ActionOption = ({icon, color, txt, handleAction, actionOpen}) => {
  return (
    <span style={{marginTop: actionOpen ? 14 : -24}} className="action-option" onClick={() => handleAction(txt)}>
      <i className={'fas fa-s fa-' + icon} style={{color}} /> <span>{txt}</span>
    </span>
  );
};

export default ActionOption;
