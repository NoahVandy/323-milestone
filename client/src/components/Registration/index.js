import React, { useState } from 'react';
import axios from 'axios';

import RegisterPage from './view';

export default function Register({ setCurrentUser, switchDialog }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [preferredPayment, setPreferredPayment] = useState('')
  const [birthday, setBirthDay] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    axios.post('http://localhost:3002/monogo/createNewUser', 
    {
      firstName: firstName, 
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      gradeLevel: gradeLevel,
      birthday: birthday,
      preferredPayment: preferredPayment,
    }).then((response) => {
      if(response.status === 200) {
        setLoading(false);
        switchDialog();
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
    setPreferredPayment={setPreferredPayment}
    switchDialog={switchDialog}
    loading={loading}
  />
  )
}