import React, { useEffect } from 'react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
  ...props
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    const handleBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    document.addEventListener('keydown', handleEscape);
    handleBodyScroll();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const sizeClasses = {
    small: 'modal--small',
    medium: 'modal--medium',
    large: 'modal--large',
    full: 'modal--full',
  };

  const classes = [
    'modal',
    sizeClasses[size],
    className,
  ].join(' ');

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={classes} {...props}>
        {/* Modal Header */}
        {title && (
          <div className="modal__header">
            <h2 className="modal__title">{title}</h2>
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalTrigger: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <div className={`modal-trigger ${className}`} onClick={onClick}>
    {children}
  </div>
);
