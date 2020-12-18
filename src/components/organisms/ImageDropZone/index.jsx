import React, {useRef, useState} from 'react';
import ImageUploadButton from '../../atoms/ImageUploadButton';
import ImageUploadProgress from '../../atoms/ImageUploadProgress';
import DroppedImage from '../../molecules/DroppedImage';
import './index.css';

const ImageDropZone = ({droppedImages, isUploading, uploadImage}) => {
  const [isDragging, setIsDragging] = useState(false);

  // Reference for file input
  const fileInput = useRef(null);

  const dragOver = (e) => {
    e.preventDefault();
    // Added condition to avoid too many unnecessary setStates
    !isDragging && setIsDragging(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const dropped = (e) => {
    const files = e.nativeEvent.dataTransfer.files;
    // Check if the dropped file is an image, if there are any uploads, then upload
    files[0].type.startsWith('image/') && !isUploading && uploadImage(files[0]);
    e.preventDefault();
    setIsDragging(false);
  };

  const addImage = () => fileInput.current.click();

  const handleInputChange = (e) => uploadImage(e.target.files[0]);

  return (
    <div
      id="image-drop-zone"
      style={{borderColor: isDragging ? 'teal' : 'grey'}}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={dropped}>
      <div id="added-images">
        {droppedImages.map((img, idx) => (
          <DroppedImage key={idx} URL={img.display_url} thumbURL={img.thumb.url} title={img.title} />
        ))}
        {isUploading ? <ImageUploadProgress /> : <ImageUploadButton addImage={addImage} />}
      </div>
      <p id="drop-info">Click + or drop your images here</p>
      <input ref={fileInput} type="file" accept="image/*" onChange={handleInputChange} />
    </div>
  );
};

export default ImageDropZone;
