import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMoon, HiSun, HiMenu } from 'react-icons/hi';
// import { HiMiniBars3CenterLeft } from 'react-icons/hi2';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can set the dark mode styles or toggle a CSS class here
  };

  return (
    <>
      <nav className={`nav_bar flex justify-space-between align-center ${isNavOpen ? 'open' : ''}`}>
        <div className="navBar_logo">
          <Link to="/">
            <img src="./assets/Home-images/yufat-logo.png" alt="YUFAT LOGO" />
          </Link>
        </div>

        <div className="right_nav_menu flex align-center">
          <span className="nav_open_close_btns" id="open" onClick={toggleNav}>
            <i className="fa">
              {isNavOpen ? (
                <HiMenu />
              ) : (
                <HiMenu />
              )}
            </i>
          </span>
          <ul className={`nav_links ${isNavOpen ? 'open' : ''}`}>
            <span className="nav_open_close_btns" id="close" onClick={toggleNav}>
              x
            </span>
            <li><Link className="nav_link" to="/">HOME</Link></li>
            <li className="drop_down_link nav_link">
              <Link className="nav_link" to="about">
                ABOUT
                <i className="fa fa-angle-down about-arrow" />
              </Link>
            </li>
            <li className="nav_link"><Link className="nav_link" to="services">SERVICES</Link></li>
            <li className="nav_link"><Link className="nav_link" to="gallery">GALLERY</Link></li>
            <li className="nav_link"><Link className="nav_link" to="contact">CONTACT</Link></li>
          </ul>

          <div className="modes" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <HiSun id="theme-toggle-icon" alt="sun" />
            ) : (
              <HiMoon id="theme-toggle-icon" alt="moon" />
            )}
          </div>

          <button className="btn nav_donate_btn" type="button">DONATE</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
