import React from 'react';
import backgroundImg from '../../resources/pics/homeBackground.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    height: 'calc(100vh - 64px)',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover',
  }
});

export default function Home () {

  const classes = useStyles();

  return (
    <div className={classes.background}>
    </div>
  )
  
}