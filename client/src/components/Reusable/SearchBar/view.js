import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputBase: {
    backgroundColor: '#fff',
    width: 400,
    maxWidth: 600,
    borderRadius: 50,
    textAlign:'left',
    marginLeft: 20,
  },  
  input: {
    padding: 0,
    outline: 'none',
    textAlign: 'left',
    height: 43,
    borderStyle: 'none',
    paddingLeft: 20,
    borderRadius: 50,
  },
  icon:{ 
    marginTop: 'auto',
    marginBottom: 'auto',
  }
    
});

export default function SearchBarView({ value, handleChange }) {

  const classes = useStyles();

  return (
    <div className={classes.inputBase}>
      <Grid container>
        <Grid item xs={11} alignItems='flex-start'>
          <div>
            <input 
              placeholder='search.'
              className={classes.input}
              onChange={(e) => handleChange(e)}
              value={value}
            />
          </div>
        </Grid>
        <Grid xs={1} className={classes.icon}>
          <SearchIcon/>
        </Grid>
        
      </Grid>
    </div>
  )
}