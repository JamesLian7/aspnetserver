
import React, { useState } from 'react';
import styles from "/Users/jameslian/Documents/aspnetserver/reactclient/src/styles.css"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-title">
        FootyFunHub
      </a>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Account">Account</a></li>

      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;

