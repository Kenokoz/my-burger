import React from 'react';

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className="BreadBottom"></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className="Meat"></div>;
      break;
    case 'chees':
      ingredient = <div className="Chees"></div>;
      break;
    case 'Salad':
      ingredient = <div className="Salad"></div>;
      break;
    case 'Bacon':
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;