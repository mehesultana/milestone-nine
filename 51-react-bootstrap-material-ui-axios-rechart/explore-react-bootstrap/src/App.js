import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
	const [news, setNews] = useState([]);
	useEffect(() => {
		// fetch(url)
		// 	.then((res) => res.json())
		// 	.then((data) => setNews(data.articles));
		const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-09-29&sortBy=popularity&apiKey=21fa6445a0c44b2eb4f08abe77498964';
		try {
			const fetchData = async () => {
				const res = await fetch(url);
				const data = await res.json();
				console.log(data.articles);
				setNews(data.articles);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<Container>
			<div className="App">
				{news.length === 0 ? (
					<Spinner animation="border" />
				) : (
					<Row xs={1} md={3} className="g-4">
						{news?.map((nw, _idx) => (
							<News news={nw} key={_idx}></News>
						))}
					</Row>
				)}
			</div>
		</Container>
	);
}

export default App;
