import React from 'react';
import './index.css';

const Input = ({type, value, onChange, placeholder}) => {
  return (
    <input
      style={{borderBottom: '4px solid ' + (value.length ? '#ccc' : '#dc143caa')}}
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
