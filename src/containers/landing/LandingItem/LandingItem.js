import React from 'react';
import {
  Grid, Paper, makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Collection from '../Collection';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const LandingItem = ({
  linkUrl, image, title, width,
}) => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={width}>
      <Link style={{ textDecoration: 'none' }} to={linkUrl}>
        <Paper className={classes.paper}>
          <Collection
            src={image}
            title={title}
          />
        </Paper>
      </Link>
    </Grid>
  );
};

export default LandingItem;
