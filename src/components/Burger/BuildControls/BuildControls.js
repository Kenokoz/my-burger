import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => {
  return (
    <div className="BuildControls">
      {controls.map(c => (
        <BuildControl
          key={c.label}
          label={c.label}
          added={() => props.ingredientAdded(c.type)}
          removed={() => props.ingredientRemoved(c.type)}
          disabled={props.disabled[c.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
