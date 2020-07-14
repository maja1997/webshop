import React from 'react';
import {
  Grid, Paper, makeStyles, Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Collection from '../Collection';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Link style={{ textDecoration: 'none' }} to="/categories/hats">
            <Paper className={classes.paper}>
              <Collection
                src="https://blog.lids.com/wp-content/uploads/2017/09/@interstate19-e1536691591529.jpg"
                title="hats"
              />
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            <Collection
              src="https://i.ytimg.com/vi/GCuBNZ8jP24/maxresdefault.jpg"
              title="jeans"
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className={classes.paper}>
            {' '}
            <Collection
              src="https://i.ytimg.com/vi/Ff0gmlXIbcA/maxresdefault.jpg"
              title="jackets"
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className={classes.paper}>
            {' '}
            <Collection
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq1ZfNeBclyEE4ZZ5KIr91smpm9Aw-E1JDOQ&usqp=CAU"
              title="sneakers"
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className={classes.paper}>
            {' '}
            <Collection
              src="https://i.ytimg.com/vi/9u9dTBjhzGo/maxresdefault.jpg"
              title="skirts"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
