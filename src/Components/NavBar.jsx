import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Moyammad's movieApp 💦</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
