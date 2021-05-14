import classes from './Burger.module.css';
import BurgerIngridiend from "./BurgerIngridient/BurgerIngridient";

const Burger = (props) => {

  let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {
      return [...Array(props.ingridients[igKey])].map((_, id) => {
        return <BurgerIngridiend key={igKey + id} type={igKey} />
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (!transformedIngridients.length) {
    transformedIngridients = <p>Please start adding ingridients</p>
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngridiend type='bread-top' />
      {transformedIngridients}
      <BurgerIngridiend type='bread-bottom' />
    </div>
  );
}


export default Burger;