import React from 'react';
import backgroundImg from '../../resources/pics/homeBackground.jpg';

import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../Reusable/SearchBar';
import MarketplaceView from '../Marketplace/view';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    height: 'calc(100vh - 64px)',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  searchBar: {
    position: 'relative',
    height: '30vh',
  },
  header: {
    textAlign: 'left',
    color: '#fff',
    marginLeft: 20,
    marginBottom: 10
  }
});

export default function Home ({ onChange, search, items }) {

  const classes = useStyles();

  return (
    <>
    <Paper className={classes.background}>
        <Grid xs={12} className={classes.searchBar}>

        </Grid>
          <Typography className={classes.header} variant='h3'>
            buy. sell.
          </Typography>
        <SearchBar 
          onChange={onChange}
          value={search}
        />

    </Paper>
        
      <section id="home-marketplace">
        <MarketplaceView 
          items={items}
        />
      </section>
    </>
  )
  
}