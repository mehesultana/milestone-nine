import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	useEffect(() => {
		// console.log('product API called');
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				// console.log('products received');
				setDisplayProducts(data);
			});
	}, []);

	useEffect(() => {
		// console.log('local storage callled');
		if (products.length) {
			const savedCart = getStoredCart();
			// console.log(savedCart);
			const storedCart = [];
			for (const key in savedCart) {
				// console.log(key);

				const addedProduct = products.find((product) => product.key === key);
				// console.log(addedProduct);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					// console.log(addedProduct);
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		//save to local storage (for now)
		addToDb(product.key);
	};

	const handleSearch = (event) => {
		const searchText = event.target.value;
		const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
		setDisplayProducts(matchedProducts);
		console.log(matchedProducts);
	};

	return (
		<div>
			<div className="search-container">
				<input type="text" onChange={handleSearch} placeholder="search product" />
			</div>
			<div className="shop-container">
				<div className="product-container">
					{displayProducts.map((product) => (
						<Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
