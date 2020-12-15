import React from 'react';
import Bio from '../molecules/Bio';
import Post from '../molecules/Post';
import PrevNext from '../organisms/PrevNext';

const PostDetails = () => {
  const post = {
    title: 'A Dummy Title',
    time: '2020-12-08T06:20:56.175Z',
    content: `<blockquote><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></blockquote><p><br></p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong>reprehenderit </strong>in <strong><em>voluptate </em></strong>velit esse cillum dolore eu fugiat nulla pariatur.</p><p><br></p><blockquote>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote><p><br></p><pre class="ql-syntax" spellcheck="false">const sayHello = () =&gt; alert('HELLO');sayHello();</pre><p><br></p><p><img src="https://raw.githubusercontent.com/iamharky/ReactJS-Chart-Generator/master/chart-generator.gif"></p>`,
  };

  const excerpts = [
    {
      slug: 'third-dummy-slug-sdf12f',
      title: 'Third and Long Dummy Title',
    },
    {
      slug: 'a-dummy-slug-dg1s5',
      title: 'A Dummy Title',
    },
    {
      slug: 'second-dummy-slug-sdf12f',
      title: 'Second Dummy Title',
    },
  ];

  return (
    <div>
      <Post post={post} />
      <PrevNext title={post.title} excerpts={excerpts} />
      <Bio />
    </div>
  );
};

export default PostDetails;
