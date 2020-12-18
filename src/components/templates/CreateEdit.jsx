import React, {useState} from 'react';
import Editor from '../organisms/Editor';
import ImageDropZone from '../organisms/ImageDropZone';

const Create = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [slug, setSlug] = useState('');
  const [editorHTML, setEditorHTML] = useState('');
  const [successed, setSuccessed] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorTxt, setErrorTxt] = useState('');

  const handleTitle = (e) => setTitle(e.target.value);

  const handleExcerpt = (e) => setExcerpt(e.target.value);

  const handleSend = () => setSuccessed(true);

  const uploadImage = () => {
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 3000);
  };

  const droppedImages = [
    {
      display_url: 'https://i.ibb.co/DtDx8RZ/Fire-Blog-folder-structure.png',
      thumb: {url: 'https://i.ibb.co/DtDx8RZ/Fire-Blog-folder-structure.png'},
      title: 'Fire-Blog-folder-structure',
    },
  ];

  return (
    <>
      <ImageDropZone droppedImages={droppedImages} isUploading={isUploading} uploadImage={uploadImage} />
      <Editor
        title={title}
        handleTitle={handleTitle}
        excerpt={excerpt}
        handleExcerpt={handleExcerpt}
        slug={slug}
        successed={successed}
        failed={failed}
        errorTxt={errorTxt}
        editorHTML={editorHTML}
        setEditorHTML={setEditorHTML}
        handleSend={handleSend}
      />
    </>
  );
};

export default Create;
