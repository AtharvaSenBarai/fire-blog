import React from 'react';
import {Link} from 'react-router-dom';
import PrevNextArrow from '../../atoms/PrevNextArrow';
import './index.css';

const PrevNextLink = ({dir, title, slug}) => {
  return (
    <Link to={'/posts/' + slug} className="prev-next-link">
      {dir === 'right' && title}
      <PrevNextArrow dir={dir} />
      {dir === 'left' && title}
    </Link>
  );
};

export default PrevNextLink;
