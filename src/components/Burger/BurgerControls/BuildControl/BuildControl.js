import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.remove} disabled={props.disabled} type='button'>Less</button>
      <button className={classes.More} onClick={props.add} type='button'>More</button>
    </div>
  );
}


export default BuildControl;