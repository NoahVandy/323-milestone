import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

import LoginPage from './view';

export default function Login({ setCurrentUser }) {

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
      }
    });

  }
  return (
  <LoginPage
    setUsername={setUsername}
    setPassword={setPassword}
    onSubmit={onSubmit}
  />
  )
}