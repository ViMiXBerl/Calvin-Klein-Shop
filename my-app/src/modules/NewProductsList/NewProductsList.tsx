import { CardListProps } from "modules/NewProductsList/types";

import { NewProducts } from "services/api/Api";

const ProductList = ({ children }: CardListProps): any => {
	return (
		<>
			<NewProducts />
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
