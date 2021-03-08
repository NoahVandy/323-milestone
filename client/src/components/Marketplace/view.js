import React from 'react'
import { Grid, Button, makeStyles, AppBar, Typography } from '@material-ui/core'

import ItemCard from './components/ItemCard';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#5E5EFF',
    color:'#fff',
    margin: 15,
    width: 130,
    float: 'right',
  },
  topGrid: {
    width: 'calc(100% - 240px)',
    backgroundColor: '#F6F6FF',
    height: 64,
  },
  container: {
    width:'100%',
    height: '100vh',
    margin: 50
  },
  header: {
    fontSize: 42,
    textAlign: 'left',
  }
});

export default function MarketplaceView({ items, toggleCreate, showItem }) {

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.container}>
        <Grid xs={1}></Grid>
        <Grid 
          xs={11} 
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography className={classes.header}>
            new items.
          </Typography>
        </Grid>
        <Grid xs={1} item></Grid>

        <Grid xs={10}>
          <Grid container spacing={2} direction='row'>
            {items?.map((i) => 
              <Grid item >
                <ItemCard 
                  showItem={showItem}
                  title={i.title}
                  desc={i.desc}
                  price={i.price}
                  id={i.id}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid xs={1} item></Grid>
      </Grid>
    </div>
  )
} 