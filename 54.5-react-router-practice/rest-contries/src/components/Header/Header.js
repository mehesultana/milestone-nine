import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<h1>header</h1>
			<Link to="/country">Country</Link>
		</div>
	);
};

export default Header;
