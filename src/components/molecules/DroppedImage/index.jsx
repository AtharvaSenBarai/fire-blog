import React from 'react';
import DroppedImageOverlay from '../../atoms/DroppedImageOverlay';
import './index.css';

const DroppedImage = ({URL, thumbURL, title}) => {
  return (
    <div className="dropped-image" style={{backgroundImage: `url(${thumbURL})`}} alt={title}>
      <DroppedImageOverlay URL={URL} />
    </div>
  );
};

export default DroppedImage;
