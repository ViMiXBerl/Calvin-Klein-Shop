import axios from "axios";
import { useState, useEffect } from "react";
import Product from "components/Product/Product";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchListProducts } from "modules/redux/actions";
import { RootState } from "store/store";

import Message from "components/Message/Message";
import Loader from "components/Loader/Loader";

export const AllProducts = (): any => {
	const dispath = useDispatch();
	const productList = useSelector((state: RootState) => state.productList);
	const { loading, error, products } = productList;

	useEffect((): any => {
		dispath(fetchListProducts());
	}, [dispath]);

	console.log(products);
	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Col>
					<Row>
						{products.map(({ product }: any) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								{console.log(product._id)}
								<Product product={product} />
							</Col>
						))}
					</Row>
				</Col>
			)}
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
			{/* {loading ? (<Loader/>): error ? (<Message>{error}</Message>)} */}
			<Row>
				{newProd.map((product): any => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
