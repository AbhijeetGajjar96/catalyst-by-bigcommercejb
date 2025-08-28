import React from 'react';
import { FooterProps, FooterLink, SocialLink } from '../types';

export const Footer: React.FC<FooterProps> = ({
  logo,
  description,
  links = [],
  socialLinks = [],
  copyright,
  className = '',
  ...props
}) => {
  return (
    <footer className={`footer ${className}`} {...props}>
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            {logo && (
              <div className="footer__logo">
                {typeof logo === 'string' ? (
                  <img src={logo} alt="Logo" className="footer__logo-image" />
                ) : (
                  logo
                )}
              </div>
            )}
            {description && (
              <p className="footer__description">{description}</p>
            )}
            {socialLinks.length > 0 && (
              <div className="footer__social">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                  >
                    {link.icon || link.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links Sections */}
          {links.map((section) => (
            <div key={section.id} className="footer__section">
              <h3 className="footer__section-title">{section.title}</h3>
              <ul className="footer__section-links">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="footer__section-link">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        {copyright && (
          <div className="footer__bottom">
            <div className="footer__copyright">
              {copyright}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
