import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav">
      <ul className="nav__list">
        <NavLink to="/" className="nav__logo">
          Portfolio Asset Manager
        </NavLink>
        <li>
          <NavLink to="/">View</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/update">Update</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
