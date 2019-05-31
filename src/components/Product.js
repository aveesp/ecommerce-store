import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./ContextAPI";
import PropTypes from "prop-types";
// import Cart from "./Cart";

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 m-3">
        <ProductConsumer>
          {value => (
            <div className="card">
              <Link
                to="/details"
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <img className="card-img-top" src={img} alt="card" />
              </Link>
              <div className="card-body text-center">
                <p className="card-text">{}</p>
                <button
                  className="btn btn-warning"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      In Cart
                    </p>
                  ) : (
                    <div>
                      <i className="fas fa-cart-plus" /> add To Cart
                    </div>
                  )}
                </button>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="mb-0 title-txt">
                  <strong>{title}</strong>
                </p>
                <p className="mb-0 title-txt">
                  <span> $ </span>
                  {price}
                </p>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
