import React from 'react';
import PrevNextLink from '../../molecules/PrevNextLink';
import './index.css';

const PrevNext = ({title, excerpts}) => {
  const postObj = excerpts.filter((post) => post.title === title);
  const i = excerpts.indexOf(postObj[0]);
  const prev = excerpts[i + 1];
  const next = excerpts[i - 1];

  return (
    <div id="prev-next" style={{marginBottom: 40}}>
      {prev ? <PrevNextLink dir="left" title={prev.title} slug={prev.slug} /> : <p />}
      {next ? <PrevNextLink dir="right" title={next.title} slug={next.slug} /> : <p />}
    </div>
  );
};

export default PrevNext;
