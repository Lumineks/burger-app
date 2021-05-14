import React from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  // getSnapshotBeforeUpdate() {
  //   console.log('will update');
  // }

  // componentDidUpdate() {
  //   console.log('updated');
  // }

  render() {
    const ingridients = Object.keys(this.props.ingridients).map(i => {
      return (
        <li key={i}>
          <span>{i}: </span>{this.props.ingridients[i]}
        </li>
      )
    });

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingridients:</p>
        <ul>
          {ingridients}
        </ul>
        <p><strong>Total Price: { this.props.price }$</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={ this.props.purchaseCancelled }>CANCEL</Button>
        <Button btnType='Success' clicked={ this.props.purchaseContinue }>CONTINUE</Button>
      </>
    );
  }
}


export default OrderSummary;