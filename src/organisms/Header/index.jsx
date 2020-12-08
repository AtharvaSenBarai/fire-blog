import React from 'react';
import Brand from '../../atoms/Brand';
import ThemeToggle from '../../molecules/ThemeToggle';
import './index.css';

const Header = () => {
  return (
    <div id="header">
      <Brand />
      <ThemeToggle />
    </div>
  );
};

export default Header;
