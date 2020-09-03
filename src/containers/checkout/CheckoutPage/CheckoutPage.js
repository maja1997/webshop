import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CheckoutItem from 'components/CheckoutItem';
import StripeCheckoutButton from 'components/StripeButton';

const useStyles = makeStyles((theme) => ({

  checkoutPage: {
    width: '55%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0',
    [theme.breakpoints.down('md')]: {
      width: '95%',
      margin: '20px auto',
    },
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
    marginTop: 30,
    marginLeft: 'auto',
    fontSize: 36,
  },
  testWarning: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    color: 'red',
  },
  stripeButton: {
    marginLeft: 'auto',
    marginTop: 50,
    marginBottom: 50,
  },
  remove: {
    [theme.breakpoints.down('md')]: {
      marginLeft: -20,
    },
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
        <div className={`${classes.headerBlock} ${classes.remove}`} style={{ width: '8%' }}>
          <span className={classes.remove}> Remove</span>
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
        <div className={classes.testWarning}>
          *Please use the following credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 10/20 - CVV: 123
        </div>
        <div className={classes.stripeButton}>
          {' '}
          <StripeCheckoutButton
            price={cartTotal}
            disabled={cartItems.length === 0}
          />
          {' '}
        </div>

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
