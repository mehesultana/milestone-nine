import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
	const { id, name, website, phone, address } = props.friend;
	const friendStyle = {
		border: '3px solid goldenrod',
		padding: '10px',
		borderRadius: '10px',
	};
	const url = `/friend/${id}`;

	return (
		<div style={friendStyle}>
			<h2>
				I am {name} {id}
			</h2>
			<h5>Call me {phone}</h5>
			<p>Visit me {website}</p>
			<p>
				<small>I live in {address.city}</small>
			</p>
			<Link to={url}>visit me</Link>
		</div>
	);
};

export default Friend;
