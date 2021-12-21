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
        <Link className="divItem" to="/About">
          About
        </Link>
        <Link className="divItem" to="/Parts">
          bodyParts
        </Link>
        <Link className="divItem" to="/Injuries">
          Injuries
        </Link>
        <Link className="divItem" to="/addinjury">
          Add Injury
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
