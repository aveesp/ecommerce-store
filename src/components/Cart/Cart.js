import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../components/ContextAPI";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="yout" title="Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <EmptyCart />;
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
