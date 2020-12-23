import React from 'react';
import FooterLink from '../../atoms/FooterLink';
import './index.css';

const accountLinks = [
  {name: 'Portfolio', URL: 'https://iamharky.github.io/'},
  {name: 'GitHub', URL: 'https://github.com/iamharky'},
  {name: 'Source code', URL: 'https://github.com/iamharky/fire-blog'},
  {name: 'Email me', URL: 'mailto:harky@yandex.com'},
];

const Footer = () => {
  return (
    <footer>
      {accountLinks.map((link, idx) => {
        let isLast = accountLinks.length === idx + 1;
        return (
          <>
            <FooterLink key={idx} name={link.name} URL={link.URL} />
            {!isLast && '•'}
          </>
        );
      })}
    </footer>
  );
};

export default Footer;
