import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
	const { house, ornaments } = props;
	return (
		<div>
			<h1>MySelf</h1>
			<small>house: {house}</small>
			<Special ornaments={ornaments}></Special>
		</div>
	);
};

export default MySelf;
