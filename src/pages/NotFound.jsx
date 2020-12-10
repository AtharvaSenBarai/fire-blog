import React from 'react';
import StatusText from '../atoms/StatusText';

const NotFound = (props) => {
  setTimeout(() => props.history.push('/'), 4000);
  return <StatusText positive={false} text="404 Not Found! Redirecting..." />;
};

export default NotFound;
