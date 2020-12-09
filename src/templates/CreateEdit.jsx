import React, {useState} from 'react';
import Editor from '../organisms/Editor';

const Create = () => {
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

  return (
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
  );
};

export default Create;
