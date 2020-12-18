import React, {useContext, useReducer} from 'react';
import db from '../../firebase';
import uniqid from 'uniqid';
import Editor from '../organisms/Editor';
import createReducer, {initialState} from '../../reducers/createReducer';
import {Context} from '../../Context';
import StatusText from '../atoms/StatusText';
import ImageDropZone from '../organisms/ImageDropZone';

const PROXY =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : '';

const Create = (props) => {
  const {user} = useContext(Context);

  const [state, dispatch] = useReducer(createReducer, initialState);

  const uploadImage = async (file) => {
    dispatch({type: 'SET_IS_UPLOADING', data: true});
    const apiKey = process.env.REACT_IMGBB_API_KEY;
    const data = new FormData();
    data.append('image', file);
    await fetch(PROXY + 'https://api.imgbb.com/1/upload?key=' + apiKey, {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => dispatch({type: 'ADD_DROPPED_IMAGE', data: res.data}))
      .catch((err) => console.log(err));
    dispatch({type: 'SET_IS_UPLOADING', data: false});
  };

  const handleTitle = (e) => dispatch({type: 'SET_TITLE', data: e.target.value});

  const handleExcerpt = (e) => dispatch({type: 'SET_EXCERPT', data: e.target.value});

  const setEditorHTML = (data) => dispatch({type: 'SET_EDITOR_HTML', data});

  const {droppedImages, isUploading, title, excerpt, slug, successed, failed, errorTxt, editorHTML} = state;

  const handleSend = () => {
    if (editorHTML !== '' && title !== '' && excerpt !== '') {
      // Replace special characters with '-' to avoid unsupported post links.
      const filteredSlug = Array.from(title.split(' ').join('-')).map((letter) =>
        /^[a-zA-Z0-9_.-]*$/.test(letter) ? letter : '-',
      );
      const uniqueSlug = filteredSlug.join('') + '-' + uniqid();
      dispatch({type: 'SET_SLUG', data: uniqueSlug});
      const noNbsp = editorHTML.replace(/&nbsp;/g, ' ');
      const time = new Date();
      db.collection('posts')
        .doc(uniqueSlug)
        .set({
          slug: uniqueSlug,
          title,
          content: noNbsp,
          time,
        })
        .then(() => console.log('POST SAVED!'))
        .catch((err) => console.log('POST SAVING ERROR =>', err));

      db.collection('excerpts')
        .doc(uniqueSlug)
        .set({
          slug: uniqueSlug,
          title,
          excerpt,
          time,
        })
        .then(() => dispatch({type: 'SUCCESSED'}))
        .catch((err) => dispatch({type: 'SET_ERROR', data: err.message}));
    } else dispatch({type: 'SET_ERROR', data: 'Please fill all of the fields!'});
  };

  if (user) {
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
  } else {
    setTimeout(() => props.history.push('/'), 4000);
    return <StatusText positive={false} text="You should login first! Redirecting..." />;
  }
};

export default Create;
