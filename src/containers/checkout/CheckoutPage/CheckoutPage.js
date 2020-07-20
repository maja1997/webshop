import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CheckoutItem from 'components/CheckoutItem';

const useStyles = makeStyles(() => ({

  checkoutPage: {
    width: '55%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0',
  },
  checkoutHeader: {
    width: '100%',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid darkgrey',
  },
  headerBlock: {
    textTransform: 'capitalize',
    width: '23%',
  },
  total: {
    marginTop: '30px',
    marginLeft: 'auto',
    fontSize: '36px',
  },
}));

function CheckoutPage({ cartItems, cartTotal }) {
  const classes = useStyles();
  return (
    <div className={classes.checkoutPage}>
      <div className={classes.checkoutHeader}>
        <div className={classes.headerBlock}>
          <span>Product</span>
        </div>
        <div className={classes.headerBlock}>
          <span> Description</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={classes.headerBlock}>
          <span> Price</span>
        </div>
        <div className={classes.headerBlock} style={{ width: '8%' }}>
          <span> Remove</span>
        </div>
      </div>

      {
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }

      <div className={classes.total}>
        <span>
          TOTAL: $
          {cartTotal}
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  // eslint-disable-next-line max-len
  cartTotal: cartItems.reduce((accValue, cartItem) => accValue + cartItem.quantity * cartItem.price, 0),
});

export default connect(mapStateToProps)(CheckoutPage);
