import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { block } from "./styles.scss";

const Card = ({ className, title, description, author }) => {
  const rootCssClasses = cn(block, className);
  return (
    <div className={rootCssClasses}>
      <img src="https://via.placeholder.com/350x150" alt="" />
      <div className={`${block}__text`}>
        <span className={`${block}__title`}>{title}</span>
        <span className={`${block}__description`}>{description}</span>
        <span className={`${block}__author`}>{author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
  title: undefined,
  description: undefined,
  author: undefined,
};

export default Card;
