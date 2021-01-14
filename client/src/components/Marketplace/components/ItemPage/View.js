import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField, Button } from '@material-ui/core';

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


export default function ProfilePage({ item, onEdit }) {

  const classes = useStyles();

  return (
    <div>
      <header className={classes.container}>
        <AccountCircleIcon 
          className={classes.profilePic}
        />
        <Typography variant='h3'>
          {item?.title} {item?.lastName}
        </Typography>
      </header>
      <div className={classes.bodyContainer}>
        <TextField 
          value={item?.title}
          fullWidth
          focused
          label='Username'
          className={classes.bodyText}
        />
        <TextField 
          value={item?.desc}
          fullWidth
          focused
          label='Grade Level'
          className={classes.bodyText}
        />
        <TextField 
          value={item?.price}
          fullWidth
          focused
          label='Price'
          className={classes.bodyText}
        />
        
        {item && (
          <Button 
            className={classes.button}
            onClick={() => onEdit(item)}
          >
            Edit Profile
          </Button>
        )}
      </div>
    </div>
  )
}