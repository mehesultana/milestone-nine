import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { fontWeight: 'bold', color: 'red' };
	return (
		<nav>
			<NavLink activeStyle={activeStyle} to="/home">
				home
			</NavLink>
			<NavLink activeStyle={activeStyle} to="/friends">
				friends
			</NavLink>
			<NavLink activeStyle={activeStyle} to="/about">
				about
			</NavLink>
			<NavLink activeStyle={activeStyle} to="/about/culture">
				Culture
			</NavLink>
		</nav>
	);
};

export default Header;
