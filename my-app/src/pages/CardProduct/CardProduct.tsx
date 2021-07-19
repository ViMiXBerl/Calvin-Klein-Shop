import axios from "axios";
import { useState, useEffect } from "react";

import Header from "modules/Header/Header";
import Text from "components/Text/Text";
import Button from "components/Button/Button";

import { StyledFavorites } from "pages/CardProduct/CardProductStyled";
import { Col, Image, ListGroup } from "react-bootstrap";
import { RowStyled } from "pages/CardProduct/CardProductStyled";

import { CardProductProps, RouteComponentProps } from "pages/CardProduct/types";

const CardProduct = ({ match }: RouteComponentProps<CardProductProps>): any => {
	const [product, setProduct] = useState({
		image: "",
		name: "",
		price: 0,
		brand: "",
		sex: "",
		color: "",
		case: "",
		bracelet: "",
		strap: "",
		closure: "",
		material: "",
		movement: "",
		dial: "",
		caseSize: 0,
		waterResistant: 0,
		countInStock: 0,
	});

	useEffect((): any => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`);

			setProduct(data);
		};

		fetchProduct();
	}, [match]);

	return (
		<>
			<Header />
			<RowStyled>
				<Col md={2}>
					<Image src={product?.image} alt={product?.name} fluid></Image>
				</Col>
				<Col md={6}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Text variant='d3'>{product?.name}</Text>
						</ListGroup.Item>
						<ListGroup.Item>
							<Text variant='d4'>Price: {product?.price} $</Text>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Text variant='d5'> - Brand: {product?.brand}</Text>
							<Text variant='d5'> - Sex: {product?.sex}</Text>
							<Text variant='d5'> - Color: {product?.color}</Text>
							<Text variant='d5'> - Case: {product?.case}</Text>
							<Text variant='d5'>
								- Bracelet/strap: {product?.bracelet || product?.strap}
							</Text>
							<Text variant='d5'>- Closure: {product?.closure || "none"}</Text>
							<Text variant='d5'>
								{" "}
								- Material: {product?.material || "none"}
							</Text>
							<Text variant='d5'>
								{" "}
								- Movement: {product?.movement || "none"}{" "}
							</Text>
							<Text variant='d5'> - Dial: {product?.dial}</Text>
							<Text variant='d5'> - Case size: {product?.caseSize} mm</Text>
							<Text variant='d5'>
								- Water resistant to {product?.waterResistant} meters
							</Text>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Text variant='d5'>Count in stock: {product?.countInStock}</Text>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button type='button' disabled={product?.countInStock === 0}>
								<Text variant='d5'>Add to Cart</Text>
							</Button>
							<StyledFavorites />
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</RowStyled>
		</>
	);
};

export default CardProduct;
