import React from 'react';
import backgroundImg from '../../resources/pics/homeBackground.jpg';

import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../Reusable/SearchBar';
import MarketplaceView from '../Marketplace/view';
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    height: 'calc(100vh - 64px)',
    width: '100%',
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
  },
  homeMarketplace: {
    width: '100%',
    
  },
  marketplaceHeader: {
    fontSize: 42,
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 50,
  },
  container: {
    width:'100%',
    height: '100vh',
  },
  
});

export default function Home ({ onChange, search, items, loading }) {

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
        
      <section id="home-marketplace" className={classes.homeMarketplace}>
        <Grid container spacing={0}>
          <Grid xs={1}></Grid>
          <Grid 
            xs={11} 
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography className={classes.marketplaceHeader}>
              new items.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.container}>
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <MarketplaceView 
            items={items}
          />
        )}
        </div>
      </section>
    </>
  )
  
}