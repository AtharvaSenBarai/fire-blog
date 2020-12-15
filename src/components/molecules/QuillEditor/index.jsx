import React from 'react';
import ReactQuill from 'react-quill';
import {modules, formats} from './config';
import './quill.css';

const QuillEditor = ({value, onChange}) => {
  return <ReactQuill value={value} onChange={onChange} modules={modules} formats={formats} bounds={'.app'} />;
};

export default QuillEditor;
