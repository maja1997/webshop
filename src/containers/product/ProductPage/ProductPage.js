import React from 'react';
import {
  Grid, Container, makeStyles, Typography, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/CartActions';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  image: {
    maxWidth: '82%',
    height: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 20,
    flex: 1,
  },
  price: {
    margin: '20px 0',
  },
});

// eslint-disable-next-line no-shadow
function ProductPage({ collection, addItem }) {
  const classes = useStyles();
  const { categoryId, productId } = useParams();

  // eslint-disable-next-line eqeqeq
  const itemForRender = collection[categoryId].items.find((item) => item.id == productId);

  // Object.values(collection[categoryId].items).forEach((val) => {
  // console.log(val.id == productId);
  // });

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container>
        <Grid item md={6}>
          <img
            className={classes.image}
            src={itemForRender.imageUrl}
            alt={itemForRender.name}
          />
        </Grid>
        <Grid className={classes.details} item md={6}>
          <Typography variant="h3">
            {itemForRender.name}
          </Typography>
          <Typography className={classes.description} variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s
            with the release of Letraset sheets containing
          </Typography>
          <Typography className={classes.price} variant="h4">
            $
            {itemForRender.price}
          </Typography>
          <Button variant="contained" size="large" color="secondary" onClick={() => addItem(itemForRender)}>Add to cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state) => ({
  collection: state.shop.collections,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
