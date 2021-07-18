import axios from "axios";
import { useState, useEffect } from "react";
import Product from "components/Product/Product";
import { Row, Col } from "react-bootstrap";

export const AllProducts = (): any => {
	const [products, setProducts] = useState<any[]>([]);

	useEffect((): any => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<Row>
				{products.map((product): any => (
					<Col key={product._vendorCode} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export const NewProducts = (): any => {
	const [products, setProducts] = useState<any[]>([]);

	useEffect((): any => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};

		fetchProducts();
	}, []);

	const newProd = products.filter((product): any => product.new === true);

	return (
		<>
			<Row>
				{newProd.map((product): any => (
					<Col key={product._vendorСode} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
