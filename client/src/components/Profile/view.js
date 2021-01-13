import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
});


export default function ProfilePage({ user }) {

  const classes = useStyles();

  return (
    <div>
      <header className={classes.container}>
        <Typography>
          {user?.firstName} {user?.lastName}
        </Typography>
      </header>
    </div>
  )
}