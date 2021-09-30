import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Meal.css';

const Meal = (props) => {
	const { strMeal, strCategory, strMealThumb } = props.meal;
	const history = useHistory();

	const handleDetailsClick = () => {
		history.push(`/meal/${strMeal}`);
	};

	return (
		<Col>
			<Card className="meal">
				<Card.Img variant="top" src={strMealThumb} />
				<Card.Body>
					<Card.Title>
						{strMeal}
						<Button variant="warning">
							Add <FontAwesomeIcon icon={faPlus} />
						</Button>
					</Card.Title>
					<Card.Text>{strCategory}</Card.Text>

					<Button onClick={handleDetailsClick} variant="outline-secondary">
						More Details
					</Button>
					<br />
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Meal;
