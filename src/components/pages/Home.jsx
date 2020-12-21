import React, {useContext, useEffect} from 'react';
import firebase from 'firebase/app';
import tinykeys from 'tinykeys';
import {Context} from '../../Context';
import StatusText from '../atoms/StatusText';
import Bio from '../molecules/Bio';
import FloatingMenu from '../organisms/FloatingMenu';
import PostList from '../organisms/PostList';

const options = [
  {icon: 'pen', color: 'green', txt: 'write'},
  {icon: 'sign-out-alt', color: 'crimson', txt: 'log out'},
];

const Home = ({history}) => {
  const {user, posts} = useContext(Context);

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      'l o g i n': () => history.push('/login'),
    });

    return () => unsubscribe();
  }, []);

  const handleAction = (action) => {
    if (action === 'write') {
      history.push('/create');
    } else if (action === 'log out') {
      firebase.auth().signOut();
    }
  };

  return (
    <>
      <Bio />
      {posts ? (
        posts.length === 0 ? (
          <>
            <StatusText positive={false} text="Nothing Posted!" />
            {user && <FloatingMenu options={options} handleAction={handleAction} />}
          </>
        ) : (
          <>
            <PostList posts={posts} />
            {user && <FloatingMenu options={options} handleAction={handleAction} />}
          </>
        )
      ) : (
        <div className="loading" />
      )}
    </>
  );
};

export default Home;
