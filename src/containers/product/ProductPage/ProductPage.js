import React, { useState } from 'react';
import {
  Grid, Container, makeStyles, Typography, Button, Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/CartActions';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RelatedProducts from '../RelatedProducts';

toast.configure();

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
  detailsTitle: {
    marginTop: 50,
  },
  description: {
    flex: 1,
  },
  price: {
    margin: '20px 0',
  },
  sizePicker: {
    marginBottom: 30,
    width: 100,
  },
});

// eslint-disable-next-line no-shadow
function ProductPage({ collection, addItem }) {
  const classes = useStyles();
  const { categoryId, productId } = useParams();

  const itemForRender = collection[categoryId].items.find((item) => item.id === +productId);
  const [productSize, setProductSize] = useState(null);

  const relatedProducts = itemForRender.similarProducts
    .map((relatedProductId) => collection[categoryId].items
      .find((item) => item.id === +relatedProductId));

  // eslint-disable-next-line eqeqeq

  // Object.values(collection[categoryId].items).forEach((val) => {
  // console.log(val.id == productId);
  // });
  const notify = () => {
    toast.success('Successful added to cart!', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 6000 });
  };

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
          <Typography className={classes.detailsTitle} variant="h5">
            Details:
          </Typography>
          <Typography className={classes.description} variant="body1">
            <ul>
              {itemForRender.description.map((bullet) => <li>{bullet}</li>)}
            </ul>
          </Typography>
          {categoryId === 'hats' ? null : (
            <FormControl variant="outlined" className={classes.sizePicker}>
              <InputLabel id="product-size">Size</InputLabel>
              <Select
                labelId="product-size-outlined-label"
                id="product-size-select-outlined"
                value={productSize}
                defaultValue={itemForRender.size[0]}
                onChange={(event) => setProductSize(event.target.value)}
                label="Size"
              >
                {itemForRender.size.map((size) => (
                  <MenuItem value={size}>{size}</MenuItem>
                ))}
              </Select>
            </FormControl>
          ) }

          <Typography className={classes.price} variant="h4">
            $
            {itemForRender.price}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => {
              addItem(itemForRender);
              notify();
            }}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
      <RelatedProducts relatedProducts={relatedProducts} />
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
