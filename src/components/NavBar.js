import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h3 className="logo">cocktail</h3>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar