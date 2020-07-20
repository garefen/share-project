import React from 'react';
import PropTypes from 'prop-types';
import sassVar from './style.scss';
import cn from 'classnames';

const { block } = sassVar;

const CSS = cn(block);

const Text = ({ label }) => {
  return (
    <span className={CSS}>
        {label}
    </span>
  );
}

Text.propTypes = {
    label: PropTypes.string,
}

Text.defaultProps = {
    label: undefined,
}

export { Text as default };
