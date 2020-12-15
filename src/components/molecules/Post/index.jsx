import React from 'react';
import PostTitle from '../../atoms/PostTitle';
import CardDate from '../../atoms/CardDate';
import PostContent from '../../atoms/PostContent';
import './index.css';

const Post = ({post}) => {
  const {title, time, content} = post;

  return (
    <div className="card">
      <PostTitle title={title} />
      <CardDate time={time} />
      <PostContent content={content} />
    </div>
  );
};

export default Post;
