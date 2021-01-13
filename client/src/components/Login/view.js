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
    minWidth: 300,
  },
  loginInput: {
    minWidth: 225,
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

function LoginPage({ 
    setUsername, 
    setPassword, 
    onSubmit
  }) {
  const classes = useStyles();

  const onChangeInput = (event) => {
    if(event?.target?.id === 'username') {
      setUsername(event.target.value);
    }
    else if(event?.target?.id === 'password') {
      setPassword(event.target.value);
    }
  }

  return (
    <div className="App">
      <header className={classes.container}>
        <Typography
          variant='h3'
        >
          Login
        </Typography>
        <br />
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
        <br />
        <Button
          variant="contained"
          onClick={onSubmit}
          className={classes.button}
        >
          Login
        </Button>
      </header>
    </div>
  );
}

export default LoginPage;
