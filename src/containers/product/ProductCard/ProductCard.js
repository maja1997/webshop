import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import formatter from 'services/Currency';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    textDecoration: 'none',
  },
});

function ProductCard({ product: { imageUrl, name, price } }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={imageUrl} alt={name} />
      <Typography className={classes.title} variant="h6">{name}</Typography>
      <Typography variant="subtitle1">{formatter.format(price)}</Typography>
    </div>
  );
}

export default ProductCard;