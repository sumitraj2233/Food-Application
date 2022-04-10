import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";
// import { Link } from "react-router-dom";

const Payment = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, totalPrice));
    console.log(token);
  };
  return (
    <StripeCheckout
      amount={totalPrice * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51JzvY4SCCsOIrfVGwbosB7mikfSvPrvzHFCBclOeTLbjcqOkLQ3Y881UEWkUMfgjVWg5zkzxMS0MVmvTgyX2vW2v00wZ2OFeus"
      currency="INR"
    >
      <Button> pay now</Button>
    </StripeCheckout>
  );
};

export default Payment;
