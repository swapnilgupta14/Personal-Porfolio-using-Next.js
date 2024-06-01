import React, { useState, useEffect } from 'react';
import { Icon } from './icon/icon';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
        <div className="navbar-tray">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Home
              </a>
            </li>
            {!isTablet && !isMobile && (
              <li className="navbar-item">
                <a href="#" className="navbar-link hover">
                  About
                </a>
              </li>
            )}
            <li className="navbar-item">
              {!isMobile && !isTablet && (
                <div>
                  <a href="#" className="navbar-link hindi">
                    <p>स्वप्निल</p>
                  </a>
                </div>
              )}
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Projects
              </a>
            </li>
            {!isTablet && !isMobile ? (
              <li className="navbar-item">
                <a href="#" className="navbar-link hover">
                  Contact
                </a>
              </li>
            ) : (
              <li className="navbar-item">
                <div onClick={toggleDropdown} className="navbar-link navbar-link-icon">
                  <Icon height={42} width={42} />
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Dropdown Item 1</a>
                    <a href="#" className="dropdown-item">Dropdown Item 2</a>
                    <a href="#" className="dropdown-item">Dropdown Item 3</a>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
