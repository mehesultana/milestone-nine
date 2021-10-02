import React from 'react';

const Special = (props) => {
	const { ornaments } = props;
	return (
		<div>
			<h1>Special </h1>
			<small>{ornaments}</small>
		</div>
	);
};

export default Special;
