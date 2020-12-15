import React from 'react';
import moment from 'moment';
import './index.css';

const CardDate = ({time}) => {
  //Comment out this and comment the other when trying templates
  //const formatted = moment(time).format('DD MMM YYYY');
  const formatted = moment(time.toDate()).format('DD MMM YYYY');

  return <p className="card-date">{formatted}</p>;
};

export default CardDate;
