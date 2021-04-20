import React from 'react';
import Aux from '../../../hoc/AuxWrapper';
import Button from '../../UI/Button/Button';

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
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
