import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
	const { strMeal, strCategory, strMealThumb } = props.meal;
	const url = `/meal/${strMeal}`;
	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={strMealThumb} />
				<Card.Body>
					<Card.Title>{strMeal}</Card.Title>
					<Card.Text>{strCategory}</Card.Text>
					<Link to={url}>details</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Meal;
