import { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

export const RingContext = createContext('ring');

function App() {
	const [house, setHouse] = useState(2);
	const ornaments = 'Ring';
	return (
		<RingContext.Provider value="diamond Ring">
			<div className="App">
				<button onClick={() => setHouse(house + 1)}>Buy a new House</button>
				<GrandFather house={house} ornaments={ornaments}></GrandFather>
			</div>
		</RingContext.Provider>
	);
}

export default App;
