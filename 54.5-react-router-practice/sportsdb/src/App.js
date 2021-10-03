import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Teams from './components/Teams/Teams';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/teams">
						<Teams></Teams>
					</Route>
					<Route path="/team/:strTeam">
						<TeamDetail></TeamDetail>
					</Route>
					<Route path="/about">
						<AboutUs></AboutUs>
					</Route>

					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
