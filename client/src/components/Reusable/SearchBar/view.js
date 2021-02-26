import React from 'react'

import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';


export default function SearchBarView() {

  return (
    <>
      <TextField 
        placeholder='search.'
        variant='outlined'
      />
      <SearchIcon/>
    </>
  )
}