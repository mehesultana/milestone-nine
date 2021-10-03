import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const Teams = () => {
	const [teams, setTeams] = useState([]);
	const [searchText, setSearchText] = useState('');
	const handleSearchField = (e) => {
		const searchTextValue = e.target.value;
		setSearchText(searchTextValue);
	};
	const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTeams(data.teams));
	}, [searchText]);

	return (
		<div>
			<Container>
				<InputGroup className="mb-5 mt-5">
					<FormControl onChange={handleSearchField} placeholder="search your team" aria-label="Recipient's username" aria-describedby="basic-addon2" />
					<Button variant="warning">Search</Button>
				</InputGroup>
				<Row xs={1} md={4} className="g-4">
					{teams.map((team) => (
						<Team key={team.idTeam} team={team}></Team>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Teams;
