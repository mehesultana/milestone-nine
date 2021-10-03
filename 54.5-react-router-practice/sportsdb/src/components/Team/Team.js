import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Team = (props) => {
	const { strTeamBadge, strTeam, strLeague } = props.team;
	const history = useHistory();
	const handleDetailsClick = () => {
		history.push(`/team/${strTeam}`);
	};
	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={strTeamBadge} />
				<Card.Body>
					<Card.Title>{strTeam}</Card.Title>
					<Card.Text>{strLeague}</Card.Text>

					<Button onClick={handleDetailsClick} variant="outline-secondary">
						More Details
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Team;
