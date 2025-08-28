import React, { forwardRef } from 'react';
import { InputProps } from '../types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  variant = 'default',
  size = 'medium',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'input';
  const variantClasses = {
    default: 'input--default',
    outlined: 'input--outlined',
    filled: 'input--filled',
  };
  
  const sizeClasses = {
    small: 'input--small',
    medium: 'input--medium',
    large: 'input--large',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'input--full-width',
    error && 'input--error',
    leftIcon && 'input--with-left-icon',
    rightIcon && 'input--with-right-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input__label">
          {label}
        </label>
      )}
      
      <div className="input__container">
        {leftIcon && (
          <span className="input__left-icon">
            {leftIcon}
          </span>
        )}
        
        <input
          ref={ref}
          className={classes}
          {...props}
        />
        
        {rightIcon && (
          <span className="input__right-icon">
            {rightIcon}
          </span>
        )}
      </div>
      
      {error && (
        <span className="input__error">
          {error}
        </span>
      )}
      
      {helperText && !error && (
        <span className="input__helper">
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
