import React from 'react';
import Teams from '../Teams/Teams';
import img from '../../images/istockphoto-1141191007-612x612.jpg';

const Home = () => {
	return (
		<div>
			<h1>Welcome to TheSportsDB</h1>
			<div>
				<img src={img} alt="" />
			</div>
			<Teams></Teams>
		</div>
	);
};

export default Home;
