import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
	const { friendId } = useParams();
	const [friend, setFriend] = useState({});
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setFriend(data));
	}, []);
	return (
		<div>
			<h3> friend detail of : {friendId}</h3>
			<h2>{friend.name}</h2>
			<h2>{friend.phone}</h2>
			<p>works at : {friend.company?.name}</p>
		</div>
	);
};

export default FriendDetail;
