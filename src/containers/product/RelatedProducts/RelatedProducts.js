import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { NavLink, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';

const useStyles = makeStyles({
  root: {
    marginLeft: 30,
    marginTop: 20,
  },
  link: {
    textDecoration: 'none',
  },
  relatedProducts: {
    marginTop: 20,
    border: '3px solid lightgray',
    padding: '10px 20px',
    marginBottom: 100,
  },
  relatedProduct: {
    height: 300,
  },

  title: {
    marginTop: 80,
  },
});

function RelatedProducts({ relatedProducts }) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const { categoryId } = useParams();

  return (
    <>
      <Typography className={classes.title} align="center" variant="h3">
        Related Products
      </Typography>
      <Grid className={classes.relatedProducts} container spacing={3}>
        {relatedProducts.map((product) => (
          <Grid key={product.id} xs={4} item>
            <NavLink className={classes.link} to={`${product.id}`}>
              <ProductCard className={classes.relatedProduct} product={product} />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default RelatedProducts;
