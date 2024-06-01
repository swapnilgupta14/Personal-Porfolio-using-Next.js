import React, { useState, useEffect } from 'react';
import { Icon } from './icon/icon';

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
              <a href="#" className="navbar-link hover" >
                Home
              </a>
            </li>
            {!isTablet && !isMobile ? <li className="navbar-item">
              <a href="#" className="navbar-link hover" >
                About
              </a>
            </li> : null}
            <li className="navbar-item">
              {!isMobile && !isTablet ? <div>
                <a href="#" className="navbar-link hindi">
                  <p>स्वप्निल</p>
                </a>
              </div> : <div>
                <span className="navbar-link" style={{marginLeft: "-15px"}}><Icon/></span>
              </div>}
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Projects
              </a>
            </li>
            {!isTablet && !isMobile ? <><li className="navbar-item">
              <a href="#" className="navbar-link hover">
                Contact
              </a>
            </li></> : (null)
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;


{/* <>
<li className="navbar-item">
  <a href="#" className="navbar-link hover">
    <Icon width={20} height={20} />
  </a>
</li>
</> */}