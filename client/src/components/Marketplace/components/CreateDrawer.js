import React from 'react'

import { Drawer, TextField, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loginInput: {
    margin: 15,
    minWidth: 225,
    '& label.Mui-focused': {
      color: '#5E5EFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5E5EFF',
    },
    '& label': {
      color: '#232360',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#5E5EFF',
    },
    '& .MuiInputBase-input': {
      color: '#232360',
      borderBottomColor: '#5E5EFF'
    },
    color: '#232360'
  },
  cancelButton:{
    backgroundColor: '#9A9AFF',
    color:'#fff',
    width: 100,
    margin: 15,
  },
  button: {
    backgroundColor: '#5E5EFF',
    color:'#fff',
    width: 100,
    margin: 15,
  },
  title: {
    margin: 15,
    color: '#5E5EFF'
  },
  drawer: {
    '& .MuiPaper-root': {
      backgroundColor: '#F6F6FF',
    }
  },
  
});

export default function CreateDrawer({ setTitle, setDesc, setPrice, toggleCreate, isCreating, onSubmit }) {

  const classes = useStyles();

  const onChangeInput = (event) => {
    if(event?.target?.id === 'title') {
      setTitle(event.target.value);
    }
    else if(event?.target?.id === 'desc') {
      setDesc(event.target.value);
    }
    else if(event?.target?.id === 'price') {
      setPrice(event.target.value)
    }
  }

  return (
    <Drawer 
      variant='temporary'
      anchor='right'
      open={isCreating}
      className={classes.drawer}
    >
      <Typography 
        variant='h5'
        className={classes.title}
      >
        Create New Item for the Marketplace
      </Typography>
      <TextField 
        id="title" 
        label="Title" 
        variant="standard"
        className={classes.loginInput}
        onChange={onChangeInput} 
      />
      <TextField 
        id="desc" 
        label="Description" 
        variant="standard"
        className={classes.loginInput}
        onChange={onChangeInput} 
        multiline={true}
      />
      <TextField 
        id="price" 
        label="Price" 
        variant="standard"
        className={classes.loginInput}
        onChange={onChangeInput} 
        multiline={true}
      />
      <Grid container>
        <Grid xs={4}>
          <Button 
            onClick={onSubmit}
            className={classes.button}
          >
            Create
          </Button>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4}>
          <Button 
            onClick={toggleCreate}
            className={classes.cancelButton}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  )
}