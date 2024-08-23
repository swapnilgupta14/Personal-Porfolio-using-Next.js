import React, { useState, useEffect } from 'react';
import { Tray, DropDown, Sun, Cross, sunAnimatedTray } from './icon/icon';

const Header = ({ isDropdownOpen, setIsDropdownOpen, scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fill, setFill] = useState('#ffffff');
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const rotateSunIcon = () => {
    setRotation(rotation + (145 * direction));
    setDirection(direction * -1);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add('noscroll');
      setShowMenu(true);
    } else {
      document.body.classList.remove('noscroll');
      setShowMenu(false);
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleColor = () => {
    setFill(fill === '#DC5F00' ? '#ffffff' : '#DC5F00');
  };

  return (
    <header className='app-header app-header-large'>
      {/* <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar-tray">
          <ul className="navbar-list">
            <li className="navbar-item">
              <p className="navbar-link hover" onClick={() => scrollToSection('home')}>
                HOME
              </p>
            </li>
            {!isMobile ? (
              <>
                <li className="navbar-item">
                  <p className="navbar-link hover" onClick={() => scrollToSection('about')}>
                    ABOUT
                  </p>
                </li>
                <li className="navbar-item">
                  <p className="navbar-link hover" onClick={() => scrollToSection('experience')}>
                    EXPERIENCE
                  </p>
                </li>
                <li className="navbar-item">
                  <p className="navbar-link hover" onClick={() => scrollToSection('projects')}>
                    PROJECTS
                  </p>
                </li>
                <li className="navbar-item">
                  <p className="navbar-link hover" onClick={() => {console.log("oyeee"); scrollToSection('contact')}}>
                    CONTACT
                  </p>
                </li>

              </>
            ) : (
              <li className="navbar-item">
                <div className="navbar-link-icon">
                  <span onClick={() => { toggleColor(); rotateSunIcon(); }} className='nightMode' style={{ transform: `rotate(${rotation}deg)` }}>
                    <Sun height={26} width={26} fill={fill} />
                  </span>
                  <span onClick={toggleDropdown} className={`menuTray ${isDropdownOpen ? 'trayOpen' : ''}`}>
                    {!isDropdownOpen ? <Tray height={20} width={20} /> : <Cross height={23} width={23} />}
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <div className={`fullscreen-menu ${showMenu ? 'visible' : ''}`}>
        <div className="fullscreen-menu-content">
          <h1>Menu</h1>
          <ul>
            <li><p onClick={() => { scrollToSection('home'); toggleDropdown(); }}>HOME</p></li>
            <li><span className='line'></span></li>
            <li><p onClick={() => { scrollToSection('experience'); toggleDropdown(); }}>EXPERIENCE</p></li>
            <li><p onClick={() => { scrollToSection('projects'); toggleDropdown(); }}>PROJECTS</p></li>
            <li><p onClick={() => { scrollToSection('publication'); toggleDropdown(); }}>MY PUBLICATION</p></li>
            <li><span className='line'></span></li>
            <li><p onClick={() => { scrollToSection('about'); toggleDropdown(); }}>ABOUT DEVELOPER</p></li>
            <li><p onClick={() => { scrollToSection('contact'); toggleDropdown(); }}>CONTACT</p></li>
            <li><p onClick={() => { scrollToSection('buy-cofee'); toggleDropdown(); }}>BUY ME COFEE</p></li>

          </ul>
        </div>
      </div> */}
    </header>
  );
};

export default Header;