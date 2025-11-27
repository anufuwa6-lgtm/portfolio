import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsActive(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsActive(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsActive(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsActive(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsActive(false)}>Contact</a></li>
      </ul>

      <div className="hamburger" onClick={() => setIsActive(!isActive)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}