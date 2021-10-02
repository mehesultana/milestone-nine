import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
	const { house } = props;
	return (
		<div>
			<h1>MySelf</h1>
			<small>house: {house}</small>
			<Special></Special>
		</div>
	);
};

export default MySelf;
