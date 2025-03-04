import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: '#2e4f57',
      color: '#fff',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  
}));

export default function ButtonAppBar({toggleOpen, handleLoginPopup}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" className={classes.title}>
            college trade.
          </Typography>
          <Button onClick={() => handleLoginPopup()} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
