import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { NavLink, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 30,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

function ProductList({ products }) {
  const classes = useStyles();
  const { categoryId } = useParams();

  return (
    <Grid className={classes.root} container justify="center" spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} md={3} item>
          <NavLink className={classes.link} to={`${categoryId}/${product.id}`}>
            <ProductCard product={product} />
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
