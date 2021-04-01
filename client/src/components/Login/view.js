import '../../App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Divider, Link, Fab } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#5E5EFF',
    display: 'flex',
    padding: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
  },
  loginInput: {
    borderColor: '#2e4f57',
    '& label.Mui-focused': {
      color: '#2e4f57',
      borderColor: '#2e4f57',
    },
    '& MuiOutlinedInput-root.Mui-focused': {
      borderColor: '#2e4f57',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2e4f57',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2e4f57',
    },
    '& label': {
      color: '#2e4f57',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#2e4f57',
    },
    '& .MuiInputBase-input': {
      color: '#2e4f57',
      backgroundColor: 'transparent'
    },
    color: '#2e4f57',
    maxWidth: '80%',
  },
  button: {
    backgroundColor: '#2e4f57',
    color:'#fff',
    maxWidth: 100,
    float: 'left'
  },
  registerButton: {
    backgroundColor: '#fff',
    color:'#2e4f57',
    maxWidth: 250,
    alignContent: 'end'
  },
  loginContainer: {
    minWidth: 1000,
  },
  loginContainerLeft: {
    backgroundColor: "#2e4f57",
    minHeight: 500,
    color: '#fff',
  },
  loginContainerRight: {
    backgroundColor: "#fff",
    minHeight: 500,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginTitle: {
    paddingTop: 15,
    paddingBottom: 15,
    color: "#2e4f57",
  },
  divider: {
    backgroundColor: '#2e4f57',
    height: 2,
    marginBottom: 70,
  },
  title: {
    paddingTop: '40%',
  },
  forgotPassword: {
    textAlign:'start',
    color: '#2e4f57'
  }
});

function LoginPage({ 
    setUsername, 
    setPassword, 
    onSubmit,
    switchToRegister
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
      <Grid container direction="row" className={classes.loginContainer} alignContent='flex-start'>
        <Grid item xs={6} >
          <div className={classes.loginContainerLeft}>
            <Typography
              variant='h3'
              className={classes.title}
            >
              college trade.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.loginContainerRight}>
            <Typography
              variant='h3'
              className={classes.loginTitle}
            >
              log in.
            </Typography>
            <Divider 
              className={classes.divider}
            />
            <Grid container direction='column'>
              <TextField 
                id="username" 
                label="Username" 
                className={classes.loginInput}
                onChange={onChangeInput} 
                fullWidth
              />
              <TextField 
                type='password'
                id="password" 
                label="Password" 
                className={classes.loginInput}
                onChange={onChangeInput} 
                fullWidth
              />
              <br />
              <Link to='/forgotpassword' className={classes.forgotPassword}>
                Forgot Password?
              </Link>
              <br />
            </Grid>
              <br />
              <Button
                variant="contained"
                onClick={onSubmit}
                className={classes.button}
              >
                log in
              </Button>
              <Button
                variant="contained"
                onClick={switchToRegister}
                className={classes.registerButton}
              >
                Register New Account
              </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
