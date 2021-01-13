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
              <Link to='/home'>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home Page'} />
                </ListItem>
              </Link>
              <ListItem button>
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary={'Marketplace'} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={'Favorited Items'} />
              </ListItem>
              <Link to={currentUser ? `/profile/${currentUser.id}` : `/login`} >
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary= {currentUser ? currentUser.first_name + "'s Profile" : 'Profile'} />
                </ListItem>
              </Link>
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
