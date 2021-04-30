import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
 
 
const CURRENCY = 'EUR';
 
const fromEuroToCent = amount => amount * 100;
 
const successPayment = data => {
  alert('Payment Successful');
};
 
const errorPayment = data => {
  alert('Payment Error');
};
 
const onToken = (amount, description) => token =>
  axios.post("http://localhost:2000/chekout",
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey="pk_test_51IjjP1Dsd9m1lldFyB47wSY97TjJoMsc38uJAlIEvggp1rPxL67zU8Za4zX47WV3TS2MKZ6Ir8vDLAOiDWM7gPWJ00J1TIVUuM"
  />
 
export default Checkout;