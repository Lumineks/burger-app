import classes from './Burger.module.css';

const Burger = (props) => {
  return (
    <button className={classes.Burger} type='button' onClick={props.clicked}>
      <svg viewBox="0 0 124 124">
        <g>
          <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
          <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
          <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
        </g>
      </svg>
    </button>
  );
}


export default Burger;