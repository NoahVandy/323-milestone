import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

import LoginPage from './view';

export default function Login({ setCurrentUser, switchDialog, handleDialog }) {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    axios.post('http://localhost:3002/mongo/loginUserByCredentials', 
    {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.status === true && response.data.user.isVerified) {
        console.log(response.data.user)
        setCurrentUser(response.data.user);
        handleDialog()
      }
      else {
        alert('no user found');
      }
    });
  }

  const switchToRegister = () => {
    history.push(`/register`);
  }

  return (
  <LoginPage
    setUsername={setUsername}
    setPassword={setPassword}
    onSubmit={onSubmit}
    switchToRegister={switchDialog}
  />
  )
}