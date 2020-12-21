import React, {useEffect} from 'react';
import tinykeys from 'tinykeys';
import Bio from '../molecules/Bio';
import PostList from '../organisms/PostList';

const Home = ({history}) => {
  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      'l o g i n': () => history.push('/login'),
    });

    return () => unsubscribe();
  }, []);

  const posts = [
    {
      slug: 'a-dummy-slug-dg1s5',
      title: 'A Dummy Title',
      time: '2020-12-08T06:20:56.175Z',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tempore facilis nobis architecto tempora minus amet sunt. Soluta quibusdam repellat ab voluptatem consequatur reprehenderit, corporis voluptates iste in animi.',
    },
    {
      slug: 'second-dummy-slug-sdf12f',
      title: 'Second Dummy Title',
      time: '2020-12-08T06:20:56.175Z',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tempore facilis nobis architecto tempora minus amet sunt. Soluta quibusdam repellat ab voluptatem consequatur reprehenderit, corporis voluptates iste in animi.',
    },
  ];

  return (
    <>
      <Bio />
      <PostList posts={posts} />
    </>
  );
};

export default Home;
