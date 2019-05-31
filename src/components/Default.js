import React, { Component } from "react";

export class defeault extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container not-found-cnt">
        <div className="row">
          <div className="col-12 mx-auto text-center text-title">
            <h1 className="display-3 R404">404</h1>
            <h2>
              <strong>
                <span className="text-warning">Error</span> <br /> Page not
                found
              </strong>
            </h2>
            <h3 className="message">
              The Page You are trying to access{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              cannot be found{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default defeault;
