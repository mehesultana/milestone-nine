import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Header from '../Header/Header';
import './MealDetails.css';

const MealDetails = () => {
	const { strMeal } = useParams();
	const history = useHistory();

	const backHome = () => {
		history.push(`/home`);
	};

	const [meal, setMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeal(data.meals[0]));
	}, [strMeal]);
	const { strCategory, strArea, strInstructions, strMealThumb } = meal;
	return (
		<Container className="details">
			<Card>
				<Card.Img variant="top" className="details-img" src={strMealThumb} />
				<Card.Body>
					<Card.Title>Name: {strMeal}</Card.Title>
					<Card.Text>Category: {strCategory}</Card.Text>
					<Card.Text>Area: {strArea}</Card.Text>
					<Card.Text>Instructions: {strInstructions}</Card.Text>
				</Card.Body>
			</Card>
			<Button variant="success" onClick={backHome}>
				Back Home
			</Button>
		</Container>
	);
};

export default MealDetails;
