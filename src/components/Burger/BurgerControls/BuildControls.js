import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price: <strong>{ props.price }</strong></p>
      {controls.map(ctrl => <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabledInfo[ctrl.type]}
        add={() => props.addIngridient(ctrl.type)}
        remove={() => props.removeIngridient(ctrl.type)}
      />)}

      <button className={classes.OrderButton} disabled={!props.isPurchaseble} onClick={props.order} >
        Order Now
      </button>
    </div>
  );
}


export default BuildControls;