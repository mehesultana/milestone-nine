import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Home.css';

const Home = () => {
	const [meals, setMeals] = useState([]);
	const [searchText, setSearchText] = useState('');
	const handleSearchField = (e) => {
		const searchTextValue = e.target.value;
		setSearchText(searchTextValue);
	};

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeals(data.meals));
	}, [searchText]);
	return (
		<Container>
			<h1>Welcome to TheMealDB</h1>
			<InputGroup className="mb-5 mt-5">
				<FormControl onChange={handleSearchField} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
				<Button variant="outline-secondary" id="button-addon2">
					Button
				</Button>
			</InputGroup>
			{/* <input onChange={handleSearchField} placeholder="search your favourite meal" type="text" /> */}
			<Row xs={1} md={4} className="g-4">
				{meals.map((meal) => (
					<Meal meal={meal}></Meal>
				))}
			</Row>
		</Container>
	);
};

export default Home;
