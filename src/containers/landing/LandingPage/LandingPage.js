import React from 'react';
import {
  Grid, makeStyles, Container,
} from '@material-ui/core';
import { connect } from 'react-redux';
import LandingItem from 'containers/landing/LandingItem';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
});

function LandingPage({ categories }) {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        {
          categories.map(({
            id, title, image, linkUrl,
          }, i) => (
            <LandingItem
              key={id}
              title={title}
              image={image}
              linkUrl={linkUrl}
              width={i < 2 ? 6 : 4}
            />
          ))
        }

      </Grid>
    </Container>
  );
}

const mapStateToProps = ({ categories: { categories } }) => ({
  categories,
});

export default connect(mapStateToProps)(LandingPage);
