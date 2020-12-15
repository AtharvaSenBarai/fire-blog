import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import RawHtml from '../../atoms/RawHtml';
import StatusText from '../../atoms/StatusText';
import TextArea from '../../atoms/TextArea';
import QuillEditor from '../../molecules/QuillEditor';
import './index.css';

const Editor = ({
  title,
  handleTitle,
  excerpt,
  handleExcerpt,
  slug,
  handleSend,
  successed,
  failed,
  errorTxt,
  editorHTML,
  setEditorHTML,
}) => {
  const [showHTML, setShowHTML] = useState(false);

  const toggleShowHTML = () => setShowHTML((bool) => !bool);

  return (
    <>
      <Input type="text" value={title} onChange={handleTitle} placeholder="Post Title" />
      <TextArea value={excerpt} onChange={handleExcerpt} placeholder="Post Excerpt" />
      <Button text="send" func={handleSend} bgColor="teal" />
      {successed && <StatusText positive={true} text="Sending Successed!" />}
      {successed && (
        <Link id="go-to-post" to={'/posts/' + slug}>
          Go to the post
        </Link>
      )}
      {failed && <StatusText positive={false} text={errorTxt} />}
      <QuillEditor value={editorHTML} onChange={setEditorHTML} />
      <Button text={showHTML ? 'hide html' : 'show html'} func={toggleShowHTML} bgColor="teal" />
      {showHTML && <RawHtml content={editorHTML} />}
    </>
  );
};

export default Editor;
