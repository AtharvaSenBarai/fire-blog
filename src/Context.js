import React, {useState, createContext, useEffect} from 'react';
import firebase from 'firebase/app';
import db from './firebase';
import tinykeys from 'tinykeys';
import {withRouter} from 'react-router-dom';

export const Context = createContext();

const ContextProvider = ({children, history}) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => setUser(userData));
  });

  useEffect(() => {
    db.collection('excerpts')
      .orderBy('time', 'desc')
      .get()
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => posts.push(doc.data()));
        setPosts(posts);
      });
  }, []);

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      'l o g i n': () => history.push('/login'),
    });

    return () => unsubscribe();
  }, []);

  return <Context.Provider value={{user, posts}}>{children}</Context.Provider>;
};

export default withRouter(ContextProvider);
