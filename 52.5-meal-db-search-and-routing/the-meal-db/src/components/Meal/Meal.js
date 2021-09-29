import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Meal = (props) => {
	const { strMeal, strCategory, strMealThumb } = props.meal;
	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={strMealThumb} />
				<Card.Body>
					<Card.Title>{strMeal}</Card.Title>
					<Card.Text>{strCategory}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Meal;
