import React from 'react';
import './index.css';

const ImageUploadButton = ({addImage}) => {
  return (
    <button id="image-upload-btn" onClick={addImage}>
      <i className="fas fa-plus fa-lg" />
    </button>
  );
};

export default ImageUploadButton;
