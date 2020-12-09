import React, {useContext, useEffect, useState} from 'react';
import StatusText from '../atoms/StatusText';
import {Context} from '../Context';
import db from '../firebase';
import Bio from '../molecules/Bio';
import Post from '../molecules/Post';
import PrevNext from '../organisms/PrevNext';

const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const {posts} = useContext(Context);

  const slug = props.match.params.slug;

  useEffect(() => {
    // Make sure thatpost is null in case opening a post in PrevNext
    setPost(null);
    // Get and set data
    db.collection('posts')
      .doc(slug)
      .get()
      // If doesn't exist, set post to an empty object to be able to show a message and redirect
      .then((doc) => setPost(doc.exists ? doc.data() : {}))
      .catch((err) => console.log(err));
  }, [props.location.pathname]);

  if (posts && post) {
    if (post.title) {
      return (
        <>
          <Post post={post} />
          <PrevNext title={post.title} excerpts={posts} />
          <Bio />
        </>
      );
    } else {
      setTimeout(() => props.history.push('/'), 4000);
      return <StatusText positive={false} text="Sorry 😢, this post doesn't exist! Redirecting..." />;
    }
  } else {
    return <div className="loading" />;
  }
};

export default PostDetails;
