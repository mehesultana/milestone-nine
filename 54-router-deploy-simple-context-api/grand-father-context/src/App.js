import { useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

function App() {
	const [house, setHouse] = useState(2);
	const ornaments = 'My heart XD';
	return (
		<div className="App">
			<button onClick={() => setHouse(house + 1)}>Buy a new House</button>
			<GrandFather house={house} ornaments={ornaments}></GrandFather>
		</div>
	);
}

export default App;
