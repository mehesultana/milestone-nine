import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './TeamDetail.css';

const TeamDetail = () => {
	const { strTeam } = useParams();
	const history = useHistory();

	const backHome = () => {
		history.push(`/home`);
	};

	const [team, setTeam] = useState({});
	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTeam(data.teams[0]));
	}, [strTeam]);
	const { strTeamBadge, strLeague, strDescriptionEN } = team;

	return (
		<Container className="details">
			<Card>
				<Card.Img variant="top" className="details-img" src={strTeamBadge} />
				<Card.Body>
					<h1>Name: {strTeam}</h1>
					<Card.Text>{strLeague}</Card.Text>
					<p>{strDescriptionEN}</p>
				</Card.Body>
			</Card>
			<Button variant="success" onClick={backHome}>
				Back Home
			</Button>
		</Container>
	);
};

export default TeamDetail;
