import React from "react"
import "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"
const controls = [
  { key: 1, label: "Salad", type: "salad" },
  { key: 2, label: "Bacon", type: "bacon" },
  { key: 3, label: "Cheese", type: "cheese" },
  { key: 4, label: "Meat", type: "meat" }
]
const buildControls = props => (
  <div className='BuildControls'>
    <p>
      Current Price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.key}
        label={ctrl.label}
        addIngredient={() => props.addIngredient(ctrl.type)}
        removeIngredient={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className='OrderButton'
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
)
export default buildControls
