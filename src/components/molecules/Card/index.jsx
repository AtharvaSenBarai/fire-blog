import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import CardDate from '../../atoms/CardDate';
import './index.css';

const Card = ({post}) => {
  const {slug, title, time, excerpt} = post;

  return (
    <div className="card">
      <CardTitle slug={slug} title={title} />
      <CardDate time={time} />
      <p>{excerpt}</p>
    </div>
  );
};

export default Card;
