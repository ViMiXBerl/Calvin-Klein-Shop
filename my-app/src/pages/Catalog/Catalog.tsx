import { CatalogProps } from "pages/Catalog/types";
import Header from "modules/Header/Header";
import Product from "components/Product/Product";
import products from "products";
import { Row, Col } from "react-bootstrap";

const Catalog = ({}: CatalogProps): any => {
	return (
		<>
			<Header />
			<Row>
				{products.map((product): any => (
					<Col key={product._vendorСode} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default Catalog;
