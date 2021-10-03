import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Navbar bg="secondary" variant="dark">
				<Container>
					<Navbar.Brand to="/home">SPORTSDB</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="/home">Home</NavLink>
						<NavLink to="/teams">Teams</NavLink>
						<NavLink to="/about">About Us</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
