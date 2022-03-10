import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn-fill','btn-outline'];
const SIZES = ['btn-normal','btn-circle','btn-large'];
const FUNCTIONS = ['btn-slider-prev','btn-slider-next'];

const Button = ({ buttonStyle, buttonSize, buttonFunction, type, children, onClick, link }) => {


  const checkButtonsStyle = STYLES.includes(buttonStyle) ? buttonStyle : null;
  const checkButtonsSize = SIZES.includes(buttonSize) ? buttonSize : null;
  const checkButtonsFunction = FUNCTIONS.includes(buttonFunction) ? buttonFunction : null;

  return (
    <Link to={`${link}`}>
      <button
        type={type}
        className={`btn ${checkButtonsStyle} ${checkButtonsSize} ${checkButtonsFunction}`}
        onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
