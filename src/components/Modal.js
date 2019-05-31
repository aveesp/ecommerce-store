import React, { Component } from "react";
import { ProductConsumer } from "../components/ContextAPI";
import { Link } from "react-router-dom";

export class Modal extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-container">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 m-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: $ {price}</h5>
                      <Link to="/">
                        <button
                          type="button"
                          className="btn btn-primary mr-3"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          go to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
