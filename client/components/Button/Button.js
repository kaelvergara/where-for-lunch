import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const Button = ({ onClick, children, theme, isDisabled }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles[theme]]: true,
        [styles[`${theme}--disabled`]]: isDisabled,
      })}
      // prevent callback function from actually being called
      // 'disabled' property is insufficient since a user can just remove 'disabled' via dev tools
      onClick={!isDisabled ? onClick : null}
      disabled={isDisabled}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  theme: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
