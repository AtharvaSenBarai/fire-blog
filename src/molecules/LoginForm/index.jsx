import React from 'react';
import LoginBtn from '../../atoms/LoginBtn';
import LoginInput from '../../atoms/LoginInput';

const LoginForm = ({email, handleEmail, password, handlePassword, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <LoginInput type="email" value={email} onChange={handleEmail} placeholder="E-mail" />
      <LoginInput type="password" value={password} onChange={handlePassword} placeholder="Password" />
      <LoginBtn />
    </form>
  );
};

export default LoginForm;
