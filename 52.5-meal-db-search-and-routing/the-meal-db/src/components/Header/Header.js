import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<img className="logo" src={logo} alt="" />
			<Container>
				<Nav className="me-5">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Menu</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

		// <div className="header">

		// 	<img className="logo" src={logo} alt="" />
		// 	<nav>
		// 		<a href="/shop">Menu</a>
		// 		<a href="/orders">Order Review</a>
		// 		<a href="/inventory">Favourite Meals</a>
		// 	</nav>
		// </div>
	);
};

export default Header;
