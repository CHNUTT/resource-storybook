import React from 'react';
import './Input.css';

const Input = ({ size = 'medium', ...rest }) => {
  return <input className={`input ${size}`} type="text" {...rest} />;
};

export default Input;
