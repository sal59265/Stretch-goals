import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h4 className="title">Stretch Goals</h4>
      <div className="navDiv">
        <Link className="divItem" to="/">
          Home
        </Link>
        <Link className="divItem" to="/about">
          About
        </Link>
        <Link className="divItem" to="/Injuries">
          Injuries
        </Link>
        <Link className="divItem" to="/Stretches">
          Stretches
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
