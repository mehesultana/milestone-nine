import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Country from './components/Country/Country';
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
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/country">
						<Country></Country>
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
