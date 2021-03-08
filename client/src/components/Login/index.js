import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

import LoginPage from './view';

export default function Login({ setCurrentUser }) {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    axios.post('http://localhost:3001/api/getUserByCredentials', 
    {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.length === 1) {
        console.log(response.data[0])
        setCurrentUser(response.data[0]);
        history.push(`/profile/${response.data[0]?.id}`)
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
    switchToRegister={switchToRegister}
  />
  )
}