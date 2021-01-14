import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField, InputLabel, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#5E5EFF',
    display: 'flex',
    padding: 50,
    paddingBottom: 0,
    paddingTop: 10,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bodyContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    padding: 50,
    paddingTop: 45,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
    paddingBottom: 30,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  textField: {
    width: '100%',
  },
  profilePic: {
    fontSize: '9rem'
  },
  bodyText: {
    color: '#232360',
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#5E5EFF',
    color: '#F1F0FF',
    marginBottom: 0,
  },
});


export default function ProfilePage({ user, onEdit }) {

  const classes = useStyles();

  return (
    <div>
      <header className={classes.container}>
        <AccountCircleIcon 
          className={classes.profilePic}
        />
        <Typography variant='h3'>
          {user?.firstName} {user?.lastName}
        </Typography>
      </header>
      <div className={classes.bodyContainer}>
        <TextField 
          value={user?.username}
          fullWidth
          focused
          label='Username'
          className={classes.bodyText}
        />
        <TextField 
          value={user?.gradeLevel}
          fullWidth
          focused
          label='Grade Level'
          className={classes.bodyText}
        />
        <TextField 
          value={user?.email}
          fullWidth
          focused
          label='Email'
          className={classes.bodyText}
        />
        <TextField 
          value={user?.birthday}
          fullWidth
          focused
          label='Birthday'
          className={classes.bodyText}
        />
        {user && (
          <Button 
            className={classes.button}
            onClick={() => onEdit(user)}
          >
            Edit Profile
          </Button>
        )}
      </div>
    </div>
  )
}