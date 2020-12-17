import React, {useRef, useState} from 'react';
import DroppedImage from '../../molecules/DroppedImage';
import './index.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/';

const ImageDropZone = ({}) => {
  const [droppedImages, setDroppedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const fileInput = useRef(null);

  const dragOver = (e) => {
    e.preventDefault();
    // Added condition to avoid to many unnecessary setStates
    !isDragging && setIsDragging(true);
    console.log(e);
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const dropped = (e) => {
    const files = e.nativeEvent.dataTransfer.files;
    fileInput.current.files = files;
    console.log(files[0]);
    uploadImage(files);
    e.preventDefault();
    setIsDragging(false);
  };

  const addImage = () => fileInput.current.click();

  const uploadImage = (files) => {
    const data = new FormData();
    data.append('image', files[0]);
    fetch(PROXY + 'https://api.imgbb.com/1/upload?key=' + process.env.REACT_IMGBB_API_KEY, {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => setDroppedImages((old) => [...old, res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="image-drop-zone"
      style={{borderColor: isDragging ? 'green' : 'grey'}}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={dropped}>
      {droppedImages.map((img, idx) => (
        <DroppedImage key={idx} URL={img.display_url} thumbURL={img.thumb.url} title={img.title} />
      ))}
      <input type="button" value="ADD" onClick={addImage} />
      <input ref={fileInput} type="file" />
    </div>
  );
};

export default ImageDropZone;
