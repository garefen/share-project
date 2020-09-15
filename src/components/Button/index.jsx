import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = ({ batata }) => {
  return (
    <div className="card">
      <p className="card__text">
        texto <span className="card__negrito">em negrito</span>
      </p>
    </div>
  );
};

export { Button as default };
