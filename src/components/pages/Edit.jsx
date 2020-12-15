import React, {useContext, useEffect, useReducer} from 'react';
import {Context} from '../../Context';
import db from '../../firebase';
import StatusText from '../atoms/StatusText';
import Editor from '../organisms/Editor';
import editReducer, {initialState} from '../../reducers/editReducer';

const Edit = (props) => {
  const {user} = useContext(Context);

  const [state, dispatch] = useReducer(editReducer, initialState);

  const slug = props.match.params.slug;

  useEffect(() => getSetData(), [props.location.pathname]);

  const getSetData = () => {
    db.collection('posts')
      .doc(slug)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({type: 'SET_ORIGINAL_DATA', data: doc.data()});
        } else props.history.push('/');
      })
      .catch((err) => console.log(err));

    db.collection('excerpts')
      .doc(slug)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({type: 'SET_EXCERPT', data: doc.data().excerpt});
        } else props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  const handleTitle = (e) => dispatch({type: 'SET_TITLE', data: e.target.value});

  const handleExcerpt = (e) => dispatch({type: 'SET_EXCERPT', data: e.target.value});

  const setEditorHTML = (data) => dispatch({type: 'SET_EDITOR_HTML', data});

  const {title, time, excerpt, successed, failed, errorTxt, editorHTML} = state;

  const handleSend = () => {
    if (editorHTML !== '' && title !== '' && excerpt !== '') {
      const noNbsp = editorHTML.replace(/&nbsp;/g, ' ');
      db.collection('posts')
        .doc(slug)
        .set({
          slug,
          title,
          content: noNbsp,
          time,
        })
        .then(() => console.log('POST UPDATED!'))
        .catch((err) => console.log('POST UPDATING ERROR =>', err));

      db.collection('excerpts')
        .doc(slug)
        .set({
          slug,
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
  } else {
    setTimeout(() => props.history.push('/'), 4000);
    return <StatusText positive={false} text="You should login first! Redirecting..." />;
  }
};

export default Edit;
