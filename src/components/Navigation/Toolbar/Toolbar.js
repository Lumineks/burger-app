import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Burger from './Burger/Burger';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Burger clicked={props.opened} />
      <div className={classes.Logo}><Logo /></div>
      <nav className={classes.DesctopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}


export default Toolbar;