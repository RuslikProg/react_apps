import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/Input.module.css';

const Input = (props) => {

  const {
    placeholder,
    onChange,
    onKeyDown,
    value,
    type,
  } = props;

  return (
    <input
      onKeyDown={onKeyDown}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={styles.inp}
      type={type} 
    />
  );
};

Input.defaultProps = {
  placeholder: 'Insert the value',
};

Input.propTypes = {
  placeholder: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
  value: propTypes.string,
  onKeyDown: propTypes.func,
  type: propTypes.string,
};
export default Input;