/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from 'redux/cart/CartActions';

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
  },
  arrow: {
    cursor: 'pointer',
  },
  value: {
    margin: '0 10px',
  },
});

const CheckoutItem = ({
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
      <span className={classes.nameQuantityPrice}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className={classes.value}>
          {quantity}
        </span>
        <div className={classes.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={classes.nameQuantityPrice}>
        {price}
      </span>
      <div
        className={classes.removeButton}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
