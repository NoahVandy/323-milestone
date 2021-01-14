import React from 'react'
import { Grid, Button, makeStyles, AppBar } from '@material-ui/core'

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
    width:'100vh'
  }
});

export default function MarketplaceView({ items, toggleCreate, showItem }) {

  const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.topGrid}>
        <Grid container justify="flex-end">
          <Button 
            onClick={toggleCreate}
            className={classes.button}
          >
            Create New +
          </Button>
        </Grid>
      </AppBar>
      <Grid container spacing={3} className={classes.container}>
        
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