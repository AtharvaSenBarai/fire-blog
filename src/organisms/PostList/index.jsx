import React from 'react';
import Card from '../../molecules/Card';

const PostList = ({posts}) => {
  return (
    <div id="post-list">
      {posts.map((post) => (
        <Card key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
