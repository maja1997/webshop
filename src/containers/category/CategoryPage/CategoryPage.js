import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ProductList from 'containers/product/ProductList';
import FilterSize from '../FilterSize';
import FilterBrand from '../FilterBrand';
import FilterPrice from '../FilterPrice';

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
  title: {
    textTransform: 'uppercase',
  },
});

function CategoryPage({ collection }) {
  const classes = useStyles();
  const { categoryId } = useParams();

  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid container>
        <Grid md="2" item>
          <FilterSize />
          <FilterBrand />
          <FilterPrice />
        </Grid>
        <Grid md="9" item>
          <Typography className={classes.title} align="center" variant="h3">
            {categoryId}
          </Typography>
          <ProductList products={collection[categoryId].items} />
        </Grid>
      </Grid>
    </Container>
  );
}
const mapStateToProps = ({ shop }) => ({
  collection: shop.collections,
});

export default connect(mapStateToProps)(CategoryPage);
