import React, {useState, createContext, useEffect} from 'react';
import firebase from 'firebase/app';
import db from './firebase';

export const Context = createContext();

const ContextProvider = ({children}) => {
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

  return <Context.Provider value={{user, posts, setPosts}}>{children}</Context.Provider>;
};

export default ContextProvider;
