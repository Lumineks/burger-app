import React from "react";
import Backdrop from "../BackDrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;    
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(-50%)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
            zIndex: this.props.show ? 500 : -1,
            top: '50%'
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}


export default Modal;

