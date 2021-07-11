import { CardListProps } from "modules/ProductList/types";

import { Row, Col } from "react-bootstrap";

import Product from "components/Product/Product";
import Text from "components/Text/Text";

import products from "products";

const ProductList = ({ children }: CardListProps): any => {
	return (
		<>
			<Text variant='h2'>New products</Text>
			<Row>
				{products.map((product): any => (
					<Col key={product.vendorСode} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default ProductList;
