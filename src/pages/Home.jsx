import React, {useContext} from 'react';
import {Context} from '../Context';
import Bio from '../molecules/Bio';
import PostList from '../organisms/PostList';

const Home = () => {
  const {posts} = useContext(Context);

  return (
    <>
      <Bio />
      {posts ? posts.length === 0 ? <p>Nothing Posted!</p> : <PostList posts={posts} /> : <div className="loading" />}
    </>
  );
};

export default Home;
