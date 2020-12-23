import React from 'react';
import './index.css';

const FooterLink = ({URL, name}) => {
  return (
    <a className="footer-link" href={URL} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default FooterLink;
