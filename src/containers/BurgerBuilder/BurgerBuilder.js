import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";

const INGRIDIENT_PRICES = {
  salad: 0.8,
  bacon: 2,
  cheese: 1,
  meat: 2.5
};

class BurgerBuilder extends React.Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    isPurchaseble: false,
    isPurchasing: false
  }

  addIngredientHandler = (type) => {
    const updatedIngridients = { ...this.state.ingridients };
    updatedIngridients[type] += 1;

    let updatedPrice = this.state.totalPrice + INGRIDIENT_PRICES[type];

    this.setState({
      ingridients: updatedIngridients,
      totalPrice: parseFloat(updatedPrice.toFixed(2))
    });

    this.updateIsPurchaseble(updatedIngridients);
  }

  removeIngridientHandler = (type) => {
    const updatedIngridients = { ...this.state.ingridients };
    if (updatedIngridients[type] <= 0)
      return;
    
    updatedIngridients[type] -= 1;

    let updatedPrice = this.state.totalPrice - INGRIDIENT_PRICES[type];

    this.setState({
      ingridients: updatedIngridients,
      totalPrice: parseFloat(updatedPrice.toFixed(2))
    });

    this.updateIsPurchaseble(updatedIngridients);
  }

  updateIsPurchaseble = (ingridients) => {
    const sum = Object.keys(ingridients).map(key => ingridients[key]).reduce((sum, number) => number + sum, 0);
    
    this.setState({ isPurchaseble: sum > 0 });
  }

  orderHandler = () => {
    this.setState({ isPurchasing: true });
  }

  purchaseCanselHandler = () => {
    this.setState({isPurchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('you have ordered!');
  }

  render() {
    const disabledInfo = { ...this.state.ingridients };

    for (const info in disabledInfo) {
      disabledInfo[info] = disabledInfo[info] <= 0;
    }

    return (
      <>
        <Burger ingridients={this.state.ingridients} />

        <BuildControls
          addIngridient={this.addIngredientHandler}
          removeIngridient={this.removeIngridientHandler}
          disabledInfo={disabledInfo}
          isPurchaseble={this.state.isPurchaseble}
          order={this.orderHandler}
          price={this.state.totalPrice} />
        
        <Modal show={this.state.isPurchasing} modalClosed={this.purchaseCanselHandler} >
          <OrderSummary
            ingridients={this.state.ingridients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCanselHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
      </>
    );
  }
}


export default BurgerBuilder;