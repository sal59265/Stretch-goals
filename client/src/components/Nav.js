import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h4 className="title">Stretch Goals</h4>
      <div className="navDiv">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Injuries">Injuries</Link>
        <Link to="Stretches">Stretches</Link>
      </div>
    </nav>
  );
};

export default Nav;
