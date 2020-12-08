import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const CardTitle = ({slug, title}) => {
  return (
    <Link to={'/posts/' + slug} className="card-title">
      {title}
    </Link>
  );
};

export default CardTitle;
