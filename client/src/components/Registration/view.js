import '../../App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Divider, Link, CircularProgress } from '@material-ui/core';

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
    float: 'left'
  },
  registerButton: {
    backgroundColor: '#fff',
    color:'#2e4f57',
    maxWidth: 250,
    float: 'right'
  },
  loginContainer: {
    minWidth: 1300,
  },
  loginContainerLeft: {
    backgroundColor: "#2e4f57",
    minHeight: 680,
    color: '#fff',
  },
  loginContainerRight: {
    backgroundColor: "#fff",
    minHeight: 680,
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
    color: '#2e4f57',
    textDecoration: 'underline'
  },
  spinner:{
    color: '#2e4f57'
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
    onSubmit,
    switchDialog,
    setPreferredPayment,
    loading
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
    else if(event?.target?.id === 'preferredPayment'){
      setPreferredPayment(event.target.value)
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
              register.
            </Typography>
            <Divider 
              className={classes.divider}
            />
            <Grid container direction='column'>
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
            <TextField 
              id="preferredPayment" 
              label="Preferred Way of Payment" 
              variant="standard"
              className={classes.loginInput}
              onChange={onChangeInput} 
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
              disabled={loading}
            >
              register    {loading && (
                <CircularProgress 
                  thickness={1}
                  size={10}
                  className={classes.spinner}
                />
              )}
            </Button>
            <Button
              variant="contained"
              onClick={switchDialog}
              className={classes.registerButton}
            >
              log in
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RegisterPage;
