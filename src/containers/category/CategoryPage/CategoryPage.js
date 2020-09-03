import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as shopActions from 'redux/shop/ShopActions';
import ProductList from 'containers/product/ProductList';
import FilterSize from '../FilterSize';
import FilterBrand from '../FilterBrand';
import FilterPrice from '../FilterPrice';
import FilterSizeSneakers from '../FilterSizeSneakers/FilterSizeSneakers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  title: {
    textTransform: 'uppercase',
  },
  filterContainer: {
    marginTop: 87,
    [theme.breakpoints.down('md')]: {
      marginTop: 5,
    },
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
}));

function CategoryPage({ products, fetchProducts }) {
  const classes = useStyles();
  const { categoryId } = useParams();

  useEffect(() => {
    fetchProducts(categoryId);
  }, [fetchProducts]);

  let FilterSizeComponent;
  switch (categoryId) {
    case 'sneakers':
      FilterSizeComponent = () => <FilterSizeSneakers />;
      break;
    case 'hats':
      FilterSizeComponent = () => null;
      break;
    default:
      FilterSizeComponent = () => <FilterSize />;
  }

  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid container>
        <Grid className={classes.filterContainer} md="2" item>
          <FilterSizeComponent />
          <FilterBrand />
          <FilterPrice />
        </Grid>
        <Grid md="9" container item>
          <Typography className={classes.title} align="center" variant="h3">
            {categoryId}
          </Typography>
          {products && products[categoryId] ? <ProductList products={products[categoryId]} /> : (
            <div className={classes.spinnerContainer}>
              <CircularProgress className={classes.spinner} />
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
const mapStateToProps = ({ shop }) => ({
  products: shop.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(shopActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
