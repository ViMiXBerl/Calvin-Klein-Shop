import Text from "components/Text/Text";
import Product from "components/Product/Product";
import products from "products";

const App = (): any => {
	return (
		<>
			<Text variant='h1'>CK Calvin Klein CITY</Text>
			<Text variant='h2'>CK Calvin Klein CITY</Text>
			<Text variant='h3'>CK Calvin Klein CITY</Text>
			<Text variant='h4'>CK Calvin Klein CITY</Text>
			<Text variant='h5'>CK Calvin Klein CITY</Text>
			<Text variant='p1'>CK Calvin Klein CITY</Text>
			<Text variant='p2'>CK Calvin Klein CITY</Text>
			<Text variant='p3'>CK Calvin Klein CITY</Text>
			<Text variant='d1'>CK Calvin Klein CITY</Text>
			<Text variant='d2'>CK Calvin Klein CITY</Text>

			<Text>CK Calvin Klein CITY</Text>

			{/* <div>
				{products.map((product): any => (
					<div key={product.vendorСode}>
						<Product product={product} />
					</div>
				))}
			</div> */}
		</>
	);
};

export default App;
