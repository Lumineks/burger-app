import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={ logo } alt='Burger builder logo' />
    </div>
  );
}


export default Logo;