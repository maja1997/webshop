import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';

const StripeCheckoutButton = ({ price, disabled }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HEM7GIhoSnueWAUlZQLwXBJEy3GvLg8vgP1GLKTtqS6S6UpuU5ZW5tG4QIyom7R6pbcjVP6MV8T2D9iArDEpwE9006hsThlbh';
  const onToken = () => {
    toast.success('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Bella Ciao"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button
        color="primary"
        variant="contained"
        disabled={disabled}
      >
        pay now
      </Button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
