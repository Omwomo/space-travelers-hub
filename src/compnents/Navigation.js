import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="avatar">
        <img src={planet} alt="Avatar" />
      </div>
      <div className="logo">
        BOOK STORE
      </div>
      <ul className="nav-links">
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/my-profile">My Profile</Link></li>
      </ul>
    </nav>
  );
}
