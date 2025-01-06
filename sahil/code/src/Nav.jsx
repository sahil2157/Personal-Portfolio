import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [showMedia, setShowMedia] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="name">
          <h2>SAHIL</h2>
        </div>
        <div className={showMedia ? "menu mobile-menu show" : "menu mobile-menu"}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/journey"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Journey
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <button onClick={() => setShowMedia(!showMedia)} aria-label="Toggle menu" className='h-button'>
            <MenuIcon id="hamburger-icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
