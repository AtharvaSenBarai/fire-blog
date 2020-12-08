import React from 'react';
import BioImg from '../../atoms/BioImage';
import BioText from '../../atoms/BioText';
import Skill from '../../atoms/Skill';
import './index.css';

const Bio = () => {
  return (
    <div id="bio">
      <BioImg />
      <BioText>
        <p>
          Hi! I am Turgut Yavuz. I am a Front-End Developer. I develop web apps with{' '}
          <Skill name="React" color="#222" bgColor="#61DAFB" />, <Skill name="Svelte" color="#FFF" bgColor="#FF3E00" />{' '}
          and <Skill name="Vue" color="#FFF" bgColor="#41B883" />. I develop mobile apps with{' '}
          <Skill name="React Native" color="#222" bgColor="#61DAFB" />.
        </p>
      </BioText>
    </div>
  );
};

export default Bio;
