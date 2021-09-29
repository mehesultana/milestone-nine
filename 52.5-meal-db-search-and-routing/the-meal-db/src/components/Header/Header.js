import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<img className="logo" src={logo} alt="" />
			<Container>
				<Nav className="me-5">
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/home">Meal</NavLink>
					<NavLink to="/home">Home</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
