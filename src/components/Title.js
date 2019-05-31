import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto y-2 text-center text-title">
          <h1 className="title py-5">
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
