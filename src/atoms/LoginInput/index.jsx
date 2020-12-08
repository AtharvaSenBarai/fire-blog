import React from 'react';
import './index.css';

const LoginInput = ({type, value, onChange, placeholder}) => {
  return <input className="login-input" type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default LoginInput;
