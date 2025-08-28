import React, { useState, useEffect } from 'react';
import { HeaderProps, MenuItem, HeaderSettings } from '../types';

export const Header: React.FC<HeaderProps> = ({
  logo,
  menuItems = [],
  settings = {},
  onSearch,
  onCartClick,
  onAccountClick,
  className = '',
  ...props
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    onSearch?.(query);
    setIsSearchOpen(false);
  };

  const handleCartClick = () => {
    onCartClick?.();
  };

  const handleAccountClick = () => {
    onAccountClick?.();
  };

  return (
    <header
      className={`header ${isSticky ? 'header--sticky' : ''} ${className}`}
      {...props}
    >
      <div className="header__container">
        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <div className="header__logo">
          {logo && (
            <a href="/" className="header__logo-link">
              {typeof logo === 'string' ? (
                <img src={logo} alt="Logo" className="header__logo-image" />
              ) : (
                logo
              )}
            </a>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                {item.children ? (
                  <div className="header__dropdown">
                    <button className="header__dropdown-toggle">
                      {item.title}
                      <span className="header__dropdown-arrow">▼</span>
                    </button>
                    <ul className="header__dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <a href={child.url} className="header__dropdown-link">
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a href={item.url} className="header__menu-link">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header__actions">
          {/* Search */}
          <button
            className="header__search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            🔍
          </button>

          {/* Account */}
          <button
            className="header__account-toggle"
            onClick={handleAccountClick}
            aria-label="Account"
          >
            👤
          </button>

          {/* Cart */}
          <button
            className="header__cart-toggle"
            onClick={handleCartClick}
            aria-label="Cart"
          >
            🛒
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="header__search-modal">
          <div className="header__search-content">
            <input
              type="text"
              placeholder="Search..."
              className="header__search-input"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch((e.target as HTMLInputElement).value);
                }
              }}
            />
            <button
              className="header__search-close"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
