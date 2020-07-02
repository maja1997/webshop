import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: 380,
    objectFit: 'cover',
  },
  title: {
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
}));

function Collection({ src, title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={src} alt={title} className={classes.image} />
      <button type="button" className={classes.btn}>
        <Typography variant="h5" gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Shop now
        </Typography>
      </button>
    </div>
  );
}

export default Collection;
