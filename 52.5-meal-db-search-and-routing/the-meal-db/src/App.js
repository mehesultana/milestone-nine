import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
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
					<Route path="/meals">
						<Meals></Meals>
					</Route>
					<Route path="/meal/:strMeal">
						<MealDetails></MealDetails>
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
