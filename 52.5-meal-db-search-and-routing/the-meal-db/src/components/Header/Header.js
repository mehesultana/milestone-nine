import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
	const style = { fontWeight: 'bold', color: 'white', marginRight: 100, marginLeft: 100 };
	return (
		<Navbar bg="dark" variant="dark">
			<img className="logo" src={logo} alt="" />
			<Container>
				<Nav className="me-5">
					<NavLink activeStyle={style} to="/home">
						Home
					</NavLink>
					<NavLink activeStyle={style} to="/meals">
						Meals
					</NavLink>
					<NavLink activeStyle={style} to="/home">
						My Meals
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
