import React from 'react';
import moment from 'moment';
import './index.css';

const CardDate = ({time}) => {
  const formatted = moment(time).format('DD MMM YYYY');

  return <p className="card-date">{formatted}</p>;
};

export default CardDate;
