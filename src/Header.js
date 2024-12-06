import React from 'react';
import './Header.css'; 
import logo from './kotaklogo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Kotak Mahindra Bank" className="logo" />
        <button className="open-button">Open now</button>
      </div>
    </header>
  );
};

export default Header;
