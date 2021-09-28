import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/friends">
						<Friends></Friends>
					</Route>
					<Route path="/friend/:friendId">
						<FriendDetail></FriendDetail>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
