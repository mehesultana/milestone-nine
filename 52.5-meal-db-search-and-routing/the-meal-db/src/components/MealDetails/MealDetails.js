import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
	const { strMeal } = useParams();

	const [meal, setMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeal(data.meals[0]));
	}, [strMeal]);
	const { strCategory, strArea, strInstructions, strMealThumb } = meal;
	return (
		<div>
			<img src={strMealThumb} alt="" />
			<h1>Name: {strMeal}</h1>
			<h2>Category: {strCategory}</h2>
			<h2>Area: {strArea}</h2>
			<p>Instructions: {strInstructions}</p>
		</div>
	);
};

export default MealDetails;
