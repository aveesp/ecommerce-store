import React, { Component } from "react";
import { ProductConsumer } from "./ContextAPI";
import { Link } from "react-router-dom";
// import Cart from "./Cart";

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-6 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 b-0">
                    Some Info :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <Link to="/">Back to product listing</Link>
                  <button
                    className="btn btn-primary ml-3"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In Cart" : "add to cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
