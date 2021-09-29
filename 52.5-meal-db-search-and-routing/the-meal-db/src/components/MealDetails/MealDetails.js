import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
	const { strMeal } = useParams();

	const [meal, setMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeal(data));
	}, []);
	return (
		<div>
			<h1>Name: {strMeal}</h1>
			<h2>Category: {meal.strCategory}</h2>
		</div>
	);
};

export default MealDetails;
