import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField, InputLabel, Grid, Button } from '@material-ui/core';

import profileBackground from '../../resources/pics/shoe-background.jpg';

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${profileBackground})`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    // filter: 'blur(3px)',
    // WebkitFilter: 'blur(3px)',
    maxHeight: 300,
    minHeight: 300,
    display: 'flex',
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minWidth: 300,
  },
  blur: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    height: 300,
    width: '100%'
  },
  containerText: {
    filter: 'blur(0px)',
    fontSize: 50,
    marginTop: 100
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
        <div className={classes.blur}>
          <Typography className={classes.containerText}>
            {user?.username}
          </Typography>
        </div>
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