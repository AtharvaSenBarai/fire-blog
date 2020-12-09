import React, {useContext} from 'react';
import StatusText from '../atoms/StatusText';
import {Context} from '../Context';
import Bio from '../molecules/Bio';
import PostList from '../organisms/PostList';

const Home = () => {
  const {posts} = useContext(Context);

  return (
    <>
      <Bio />
      {posts ? (
        posts.length === 0 ? (
          <StatusText positive={false} text="Nothing Posted!" />
        ) : (
          <PostList posts={posts} />
        )
      ) : (
        <div className="loading" />
      )}
    </>
  );
};

export default Home;
