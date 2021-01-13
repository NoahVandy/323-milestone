import '../../App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#5E5EFF',
    display: 'flex',
    padding: 50,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 700,
  },
  loginInput: {
    minWidth: 500,
    '& label.Mui-focused': {
      color: '#F1F0FF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& label': {
      color: '#F1F0FF',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: '#F1F0FF',
      backgroundColor: 'transparent'
    },
    color: '#F1F0FF'
  },
  button: {
    backgroundColor: '#fff',
    color:'#7373AF'
  }
});

function RegisterPage({ 
    setUsername, 
    setPassword, 
    setFirstName, 
    setLastName, 
    setGradeLevel, 
    setBirthDay,
    setEmail,
    onSubmit
  }) {
  const classes = useStyles();

  const onChangeInput = (event) => {
    if(event?.target?.id === 'firstName') {
      setFirstName(event.target.value);
    }
    else if(event?.target?.id === 'lastName') {
      setLastName(event.target.value);
    }
    else if(event?.target?.id === 'username') {
      setUsername(event.target.value);
    }
    else if(event?.target?.id === 'password') {
      setPassword(event.target.value);
    }
    else if(event?.target?.id === 'gradeLevel') {
      setGradeLevel(event.target.value);
    }
    else if(event?.target?.id === 'birthday') {
      setBirthDay(event.target.value);
    }
    else if(event?.target?.id === 'email') {
      setEmail(event.target.value);
    }
  }

  return (
    <div className="App">
      <header className={classes.container}>
        <Typography
          variant='h3'
        >
          Register
        </Typography>
        <br />
        <TextField 
          id="email" 
          label="Email Address" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="username" 
          label="Username" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="password" 
          label="Password" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="firstName" 
          label="First Name" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="lastName" 
          label="Last Name" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="gradeLevel" 
          label="Grade Level" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <TextField 
          id="birthday" 
          label="Birthday" 
          variant="standard"
          className={classes.loginInput}
          onChange={onChangeInput} 
        />
        <br />
        <Button
          variant="contained"
          onClick={onSubmit}
          className={classes.button}
        >
          Register
        </Button>
      </header>
    </div>
  );
}

export default RegisterPage;
