import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
	const ornaments = useContext(RingContext);
	return (
		<div>
			<h1>Special </h1>
			<small>{ornaments}</small>
		</div>
	);
};

export default Special;
