/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from 'redux/cart/CartActions';
import formatter from 'services/Currency';

const useStyles = makeStyles({
  checkoutItem: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: '1px solid darkgrey',
    padding: '15px 0',
    fontSize: '15px',
    alignItems: 'center',
  },
  imageContainer: {
    width: '23%',
    paddingRight: '15px',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  namePrice: {
    width: '23%',
  },
  quantity: {
    display: 'flex',
    width: '23%',
  },
  removeButton: {
    paddingLeft: '12px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  arrow: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  value: {
    margin: '0 10px',
  },
});

const CheckoutItem = ({
  // eslint-disable-next-line no-shadow
  cartItem, clearItem, addItem, removeItem,
}) => {
  const classes = useStyles();
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={imageUrl} alt="item" />
      </div>
      <span className={classes.namePrice}>{name}</span>
      <span className={classes.quantity}>
        <button
          type="button"
          className={classes.arrow}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </button>
        <span className={classes.value}>
          {quantity}
        </span>
        <button
          type="button"
          className={classes.arrow}
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </button>
      </span>
      <span className={classes.namePrice}>
        {formatter.format(price)}
      </span>
      <button
        type="button"
        className={classes.removeButton}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
