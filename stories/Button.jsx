import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';


export const Button = ({ primary, backgroundColor, size, label, color , ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={ { backgroundColor : backgroundColor ?? 'black' , color : color ?? 'white'}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
