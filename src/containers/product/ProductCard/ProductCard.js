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

function ProductCard({ product: { image, title, price } }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} alt={title} />
      <Typography className={classes.title} variant="h5">{title}</Typography>
      <Typography variant="subtitle1">{formatter.format(price)}</Typography>
    </div>
  );
}

export default ProductCard;
