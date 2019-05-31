import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-cntter">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="cart" className="ml-auto">
          <button className="btn btn-primary">
            <i className="fas fa-shopping-bag" />
            &nbsp; my cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
