import React, {useEffect} from 'react';
import tinykeys from 'tinykeys';
import Bio from '../molecules/Bio';
import PostList from '../organisms/PostList';
import FloatingMenu from '../organisms/FloatingMenu';

const options = [
  {icon: 'pen', color: 'green', txt: 'write'},
  {icon: 'sign-out-alt', color: 'crimson', txt: 'log out'},
];

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

const Home = ({history}) => {
  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      'l o g i n': () => history.push('/login'),
    });

    return () => unsubscribe();
  }, []);

  const handleAction = (action) => {
    if (action === 'write') {
      history.push('/create');
    } else if (action === 'log out') {
      alert('Logging Out...');
    }
  };

  return (
    <>
      <Bio />
      <PostList posts={posts} />
      <FloatingMenu options={options} handleAction={handleAction} />
    </>
  );
};

export default Home;
