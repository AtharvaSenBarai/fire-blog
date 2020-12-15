import React from 'react';
import './index.css';

const TextArea = ({value, onChange, placeholder}) => {
  return (
    <textarea
      className="text-area"
      style={{border: '4px solid ' + (value.length ? '#ccc' : '#dc143caa')}}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
