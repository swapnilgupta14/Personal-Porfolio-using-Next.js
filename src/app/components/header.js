import React, { useState, useEffect } from 'react';
import {Icon} from "../components/icon/icon";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  return (
    <header>
      <nav className={`navbar ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
        <div className="navbar-tray">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link" >
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                About
              </a>
            </li>
            {!isTablet && !isMobile ? <><li className="navbar-item">
              <a href="#" className="navbar-link">
                Projects
              </a>
            </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link">
                  Contact
                </a>
              </li></> : (
              <>
              <li className="navbar-item">
                <a href="#" className="navbar-link">
                  <Icon width={20} height={20}/>
                </a>
              </li>
              </>)
              }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
