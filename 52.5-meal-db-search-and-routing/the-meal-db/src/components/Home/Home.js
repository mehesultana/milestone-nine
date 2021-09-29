import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Home = () => {
	const [meals, setMeals] = useState([]);
	const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeals(data.meals));
	}, []);
	return (
		<Container>
			<Row xs={1} md={4} className="g-4">
				{meals.map((meal) => (
					<Meal meal={meal}></Meal>
				))}
			</Row>
		</Container>
	);
};

export default Home;
