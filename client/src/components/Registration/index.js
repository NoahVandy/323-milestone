import React, { useEffect, useLayoutEffect, useState } from 'react';

import RegisterPage from './view';

import axios from 'axios';
import { useHistory } from 'react-router'

export default function Register({ setCurrentUser }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [birthday, setBirthDay] = useState('');

  const history = useHistory();

  const onSubmit = () => {
    axios.post('http://localhost:3001/api/createUser', 
    {
      firstName: firstName, 
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      gradeLevel: gradeLevel,
      birthday: birthday,
    }).then((response) => {
      if(response.data.affectedRows === 1) {
        alert('successfully added to database');
        setCurrentUser(response.data[0]);
      }
    });

  }
  return (
  <RegisterPage
    setFirstName={setFirstName}
    setLastName={setLastName}
    setUsername={setUsername}
    setPassword={setPassword}
    setGradeLevel={setGradeLevel}
    setBirthDay={setBirthDay}
    setEmail={setEmail}
    onSubmit={onSubmit}
  />
  )
}