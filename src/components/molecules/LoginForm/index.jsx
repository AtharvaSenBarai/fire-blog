import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const LoginForm = ({email, handleEmail, password, handlePassword, handleSubmit}) => {
  return (
    <div>
      <Input type="email" value={email} onChange={handleEmail} placeholder="E-mail" />
      <Input type="password" value={password} onChange={handlePassword} placeholder="Password" />
      <Button text="login" bgColor="#399" func={handleSubmit} />
    </div>
  );
};

export default LoginForm;
