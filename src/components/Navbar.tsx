import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

export const Navbar: React.FC = () => (
	<nav className="nav">
		<ul className="nav__list">
			<NavLink to="/" className="nav__logo">
				Portfolio Asset Manager
			</NavLink>
			<li className="list--1">
				<NavLink to="/">View</NavLink>
			</li>
			<li className="list--2">
				<NavLink to="/create">Create</NavLink>
			</li>
			<li className="list--3">
				<NavLink to="/update">Update</NavLink>
			</li>
		</ul>
	</nav>
);
