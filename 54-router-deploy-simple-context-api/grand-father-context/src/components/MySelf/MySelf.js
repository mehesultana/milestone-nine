import React from 'react';

const MySelf = (props) => {
	const { house } = props;
	return (
		<div>
			<h1>MySelf</h1>
			<small>house: {house}</small>
		</div>
	);
};

export default MySelf;
