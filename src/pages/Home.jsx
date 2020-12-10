import React, {useContext} from 'react';
import StatusText from '../atoms/StatusText';
import {Context} from '../Context';
import firebase from 'firebase/app';
import Bio from '../molecules/Bio';
import FloatingMenu from '../organisms/FloatingMenu';
import PostList from '../organisms/PostList';

const options = [
  {icon: 'pen', color: 'green', txt: 'write'},
  {icon: 'sign-out-alt', color: 'crimson', txt: 'log out'},
];

const Home = (props) => {
  const {user, posts} = useContext(Context);

  const handleAction = (action) => {
    if (action === 'write') {
      props.history.push('/create');
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
