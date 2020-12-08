import React from 'react';
import './index.css';

const Skill = ({name, color, bgColor}) => {
  return (
    <span className="skill" style={{color, backgroundColor: bgColor}}>
      {name}
    </span>
  );
};

export default Skill;
