import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { block } from "./styles.scss";

import Logo from "../../assets/logo.svg";

const Navbar = ({ className }) => {
  const rootCssClasses = cn(block, className);
  return (
    <div className={rootCssClasses}>
      <div className={`${block}__wrapper`}>
        <img className={`${block}__logo`} src={Logo} alt="Logo" />
        <ul className={`${block}__link-group`}>
          <li className={`${block}__link-item`}>
            <a href="#" className={`${block}__link`}>
              Registre-se
            </a>
          </li>
          <li className={`${block}__link-item`}>
            <a href="#" className={`${block}__link`}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: undefined,
};

export default Navbar;
