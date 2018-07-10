import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ onChange, value, label, isChecked }) => (
  <div className={styles.root}>
    <input
      type="checkbox"
      id={value}
      name="feature"
      onChange={onChange}
      value={value}
      checked={isChecked}
    />
    <label htmlFor={value}>{label}</label>
  </div>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Checkbox;
