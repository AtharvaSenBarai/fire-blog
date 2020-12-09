import React, {useState} from 'react';
import StatusText from '../atoms/StatusText';
import LoginForm from '../molecules/LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    alert('LOGGED IN!');
  };

  return (
    <>
      <LoginForm
        email={email}
        handleEmail={handleEmail}
        password={password}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
      />
      <StatusText positive={false} text="User doesn't exist!" />
    </>
  );
};

export default Login;
