import React from 'react';
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

const productList = [{
  id: 1,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
},
{
  id: 2,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
}, {
  id: 3,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
}, {
  id: 4,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
}, {
  id: 5,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
}, {
  id: 6,
  title: 'nike duks',
  price: 1334.23,
  image: 'http://s7d2.scene7.com/is/image/aeo/0573_1894_410_f?$cat-main_large$',
},
];

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
  title: {
    textTransform: 'uppercase',
  },
});

function CategoryPage() {
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
          <ProductList products={productList} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoryPage;
