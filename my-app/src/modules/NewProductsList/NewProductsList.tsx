import { CardListProps } from "modules/NewProductsList/types";

import { Row, Col } from "react-bootstrap";

import Product from "components/Product/Product";
import Text from "components/Text/Text";

import products from "products";
import { StyledRow } from "modules/NewProductsList/NewProductsListStyled";
import { Round } from "assets";

const ProductList = ({ children }: CardListProps): any => {
	const newProd = products.filter((product): any => product.new === true);
	console.log(newProd);
	return (
		<>
			<Row>
				<Col>
					<Text variant='h2'>CK Calvin Klein CITY</Text>
					<Text variant='p2'>Quarts movement for HIM</Text>
					<Text variant='p2'>
						The heart of this watch is a highly reliable Swiss quartz movement.
					</Text>
				</Col>
				<Col></Col>
				<Col></Col>
			</Row>
			<Row className='text-center'>
				<Text variant='h2'>New products</Text>
			</Row>
			<Row>
				{newProd.map((product): any => (
					<Col key={product.vendorСode} sm={12} md={6} lg={4} xl={3}>
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
