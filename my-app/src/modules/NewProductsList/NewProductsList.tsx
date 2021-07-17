import { CardListProps } from "modules/NewProductsList/types";

import { Row, Col, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Product from "components/Product/Product";
import Text from "components/Text/Text";
import Button from "components/Button/Button";

import products from "products";
import {
	StyledRow,
	StyledFavorites,
} from "modules/NewProductsList/NewProductsListStyled";
import { Round } from "assets";

const ProductList = ({ children }: CardListProps): any => {
	const newProd = products.filter((product): any => product.new === true);

	return (
		<>
			<Row>
				<Col>
					<Text variant='h2'>CK Calvin Klein CITY</Text>
					<Text variant='p2'>Quarts movement for HIM</Text>
					<Text variant='p2'>
						The heart of this watch is a highly reliable Swiss quartz movement.
					</Text>
					<Row>
						<Col>
							<Button type='button' disabled={false}>
								<LinkContainer to='/catalog'>
									<Nav>
										<Text variant='p4'>Collection</Text>
									</Nav>
								</LinkContainer>
							</Button>
						</Col>
						<Col>
							<LinkContainer to='/favorites'>
								<Nav>
									<StyledFavorites />
								</Nav>
							</LinkContainer>
						</Col>
					</Row>
				</Col>
				<Col></Col>
				<Col></Col>
			</Row>
			<Row className='text-center'>
				<Text variant='h2'>New products</Text>
			</Row>
			<Row>
				{newProd.map((product): any => (
					<Col key={product._vendorСode} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<Row>
				<Col>
					<StyledRow>
						<Col>
							<Round></Round>
						</Col>
						<Col>
							<Text variant='h3'>NEW COLLECTION</Text>

							<Text variant='h1'>2021</Text>
						</Col>
					</StyledRow>
					<Row></Row>
				</Col>
				<Col></Col>
			</Row>
		</>
	);
};

export default ProductList;

//all

// {products.map((product): any => (
// 	<Col key={product.vendorСode} sm={12} md={6} lg={4} xl={3}>
// 		<Product product={product} />
// 	</Col>
// ))}

//new

// {
// 	products.map((product): any => (
// 		<Col key={product.vendorСode} sm={12} md={6} lg={4} xl={3}>
// 			{product.new === true ? <Product product={product} /> : ""}
// 		</Col>
// 	));
// }
