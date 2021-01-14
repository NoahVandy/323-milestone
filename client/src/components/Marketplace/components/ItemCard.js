import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import reptilePic from '../../Marketplace/contemplative-reptile.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
  text: {
    color: '#232360',
  },
  desc: {
    color: '#7B7B8F'
  }
});

export default function MediaCard({title, desc, price}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={reptilePic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography className={classes.text}>
          Price: {price}
        </Typography>
      </CardActions>
    </Card>
  );
}