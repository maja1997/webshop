import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/CartActions';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchProduct, fetchRelatedProducts } from 'redux/shop/ShopActions';
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
  spinnerContainer: {
    position: 'relative',
    height: '100vh',
  },
  spinner: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

// eslint-disable-next-line no-shadow
function ProductPage({
  products,
  addItem,
  fetchProduct,
}) {
  const classes = useStyles();
  const { categoryId, productId } = useParams();

  const itemForRender = products[categoryId]?.find((item) => item.id === +productId);
  const [productSize, setProductSize] = useState(null);

  useEffect(() => {
    fetchProduct(categoryId, productId);
    setProductSize(null);
  }, [productId]);

  const relatedProducts = itemForRender?.similarProducts
    .map((relatedProductId) => products[categoryId]
      .find((item) => item.id === +relatedProductId));

  const relatedProductsLoaded = relatedProducts?.every((prod) => prod);
  // eslint-disable-next-line

  const notify = () => {
    toast.success('Successful added to cart!', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 6000 });
  };

  return itemForRender ? (
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
                onChange={(event) => setProductSize(event.target.value)}
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
            disabled={!productSize}
            onClick={() => {
              addItem(itemForRender);
              notify();
            }}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
      {relatedProductsLoaded ? <RelatedProducts relatedProducts={relatedProducts} /> : null}

    </Container>
  ) : (
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  fetchProduct: (prodType, prodId) => dispatch(fetchProduct(prodType, prodId)),
  fetchRelatedProducts: (prodType, prodIds) => dispatch(fetchRelatedProducts(prodType, prodIds)),
});

const mapStateToProps = ({ shop }) => ({
  products: shop.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
