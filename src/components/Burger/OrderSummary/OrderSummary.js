import React from 'react';
import Aux from '../../../hoc/AuxWrapper';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingrKey => (
    <li key={ingrKey}>
      <span style={{ textTransorm: 'capitalize' }}>{ingrKey}</span>:{' '}
      {props.ingredients[ingrKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
