import React from 'react';
import './index.css';

const DroppedImageOverlay = ({URL}) => {
  const copyURL = () => {
    let input = document.createElement('input');
    input.setAttribute('value', URL);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy'); //Returns true-false
    document.body.removeChild(input);
  };

  return (
    <div className="dropped-image-overlay">
      <span className="copy-link" onClick={copyURL}>
        <i className="fas fa-s fa-link" /> Copy URL
      </span>
    </div>
  );
};

export default DroppedImageOverlay;
