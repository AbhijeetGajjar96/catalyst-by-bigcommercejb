import React from 'react';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  hover = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: 'card--default',
    elevated: 'card--elevated',
    outlined: 'card--outlined',
    flat: 'card--flat',
  };
  
  const paddingClasses = {
    none: 'card--padding-none',
    small: 'card--padding-small',
    medium: 'card--padding-medium',
    large: 'card--padding-large',
  };

  const shadowClasses = {
    none: 'card--shadow-none',
    small: 'card--shadow-small',
    medium: 'card--shadow-medium',
    large: 'card--shadow-large',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    shadowClasses[shadow],
    hover && 'card--hover',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`card__header ${className}`}>
    {children}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`card__body ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);
