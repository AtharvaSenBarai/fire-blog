import React, {useContext, useEffect, useState} from 'react';
import StatusText from '../atoms/StatusText';
import {Context} from '../Context';
import firebase from 'firebase/app';
import db from '../firebase';
import Bio from '../molecules/Bio';
import Post from '../molecules/Post';
import FloatingMenu from '../organisms/FloatingMenu';
import PrevNext from '../organisms/PrevNext';

const options = [
  {icon: 'pen', color: 'green', txt: 'write'},
  {icon: 'edit', color: 'green', txt: 'edit'},
  {icon: 'trash', color: 'crimson', txt: 'delete'},
  {icon: 'sign-out-alt', color: 'crimson', txt: 'log out'},
];

const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const {user, posts} = useContext(Context);

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

  const handleAction = (action) => {
    if (action === 'write') {
      props.history.push('/create');
    } else if (action === 'edit') {
      props.history.push('/edit/' + slug);
    } else if (action === 'delete') {
      deletePost();
    } else if (action === 'log out') {
      firebase.auth().signOut();
    }
  };

  const deletePost = () => {
    let confirmation = prompt('Do you really want to delete this post? (Type "Yes")') || 'no';
    if (confirmation.toLocaleLowerCase() === 'yes') {
      db.collection('posts')
        .doc(slug)
        .delete()
        .then(() => console.log('Post deleted, deleting excerpt...'))
        .catch((err) => console.log(err));

      db.collection('excerpts')
        .doc(slug)
        .delete()
        .then(() => {
          console.log('Excerpt succesfully deleted, redirecting...');
          props.history.push('/');
        })
        .catch((err) => console.log(err));
    }
  };

  if (posts && post) {
    // Check if the object has any property
    if (post.title) {
      return (
        <>
          <Post post={post} />
          <PrevNext title={post.title} excerpts={posts} />
          <Bio />
          {user && <FloatingMenu options={options} handleAction={handleAction} />}
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
