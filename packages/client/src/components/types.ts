import React from 'react';

// Header Component Types
export interface MenuItem {
  id: string;
  title: string;
  url: string;
  children?: MenuItem[];
}

export interface HeaderSettings {
  sticky?: boolean;
  logoPosition?: 'left' | 'center' | 'right';
  showSearch?: boolean;
  showAccount?: boolean;
  showCart?: boolean;
}

export interface HeaderProps {
  logo?: string | React.ReactNode;
  menuItems?: MenuItem[];
  settings?: HeaderSettings;
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
  onAccountClick?: () => void;
  className?: string;
  [key: string]: any;
}

// Footer Component Types
export interface FooterLink {
  id: string;
  title: string;
  url: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export interface FooterProps {
  logo?: string | React.ReactNode;
  description?: string;
  links?: FooterSection[];
  socialLinks?: SocialLink[];
  copyright?: string;
  className?: string;
  [key: string]: any;
}

// Button Component Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

// Card Component Types
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

// Modal Component Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  [key: string]: any;
}

// Input Component Types
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Select Component Types
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

// Toast Component Types
export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

// Loading Component Types
export interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

// Common Types
export type ComponentSize = 'small' | 'medium' | 'large';
export type ComponentVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
