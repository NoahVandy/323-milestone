import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarIcon from '@material-ui/icons/Star';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from '../Registration';
import Login from '../Login'
import Profile from '../Profile';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#F6F6FF'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: '#232360'
  },
  icon: {
    color: '#5E5EFF',
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState();

  return (
    <>
    <Router>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
        <div className={classes.toolbar} />
          <Divider />
            <List>
              <Link to='/home' className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={classes.icon}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home Page'}  className={classes.link}/>
                </ListItem>
              </Link>
              <Link className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={classes.icon}>
                    <MonetizationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Marketplace'}  className={classes.link}/>
                </ListItem>
              </Link>
              <Link className={classes.link}>
                <ListItem button >
                  <ListItemIcon className={classes.icon}>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Favorited Items'}  className={classes.link}/>
                </ListItem>
              </Link>
              <Link to={currentUser ? `/profile/${currentUser.id}` : `/login`} className={classes.link} >
                <ListItem button>
                  <ListItemIcon className={classes.icon}>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary= {currentUser ? currentUser.firstName + "'s Profile" : 'Profile'}  className={classes.link}/>
                </ListItem>
              </Link>
              {currentUser && (
                <Link to='/login' className={classes.link}>
                  <ListItem button onClick={() => {
                    setCurrentUser(null);
                  }}>
                    <ListItemIcon className={classes.icon}>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary='Logout' className={classes.link}/>
                  </ListItem>
                </Link>
              )}
            </List>
          <Divider />
        </Drawer>
      </div>
      <div className="App-header">
        <Switch>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/register">
            <Register 
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route path="/login">
            <Login 
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route path="/">
            <Register 
              setCurrentUser={setCurrentUser}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </>
  );
}
