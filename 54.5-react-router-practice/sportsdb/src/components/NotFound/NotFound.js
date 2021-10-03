import React from 'react';
import img from '../../images/404-ERROR.png';

const NotFound = () => {
	return (
		<div>
			<div className="not-found">
				<img src={img} alt="" />
			</div>
			<h1>not found</h1>
		</div>
	);
};

export default NotFound;
