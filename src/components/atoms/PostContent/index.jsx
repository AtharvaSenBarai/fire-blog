import React from 'react';
import './index.css';

const PostContent = ({content}) => {
  return <div id="post-content" dangerouslySetInnerHTML={{__html: content.toString()}}></div>;
};

export default PostContent;
