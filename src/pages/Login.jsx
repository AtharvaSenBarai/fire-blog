import React, {useContext, useState} from 'react';
import firebase from 'firebase/app';
import StatusText from '../atoms/StatusText';
import LoginForm from '../molecules/LoginForm';
import {Context} from '../Context';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(null);

  const {user} = useContext(Context);

  const handleEmail = (e) => setEmail(e.target.value); // No, it's not trimmable 🙄

  const handlePassword = (e) => setPassword(e.target.value.trim());

  const handleSubmit = () => {
    setAuthError(null);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) && password.trim() !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => props.history.push('/'))
        .catch((err) => setAuthError(err.message));
    } else if (email.trim() === '') {
      setAuthError('E-mail cannot be empty!');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setAuthError('Wrong E-mail format!');
    } else if (password.trim() === '') {
      setAuthError('Password cannot be empty!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleSubmit();
    }
  };

  if (!user) {
    return (
      <div onKeyDown={handleKeyDown}>
        <LoginForm
          email={email}
          handleEmail={handleEmail}
          password={password}
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
        />
        {authError && <StatusText positive={false} text={authError} />}
      </div>
    );
  } else {
    setTimeout(() => props.history.push('/'), 4000);
    return <StatusText positive={false} text="You've already logged in! Redirecting..." />;
  }
};

export default Login;
