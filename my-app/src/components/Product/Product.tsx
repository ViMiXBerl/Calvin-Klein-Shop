import { ProductProps } from "components/Product/types";
import Text from "components/Text/Text";
import { Card } from "react-bootstrap";

import { ProductLink, CardStyled } from "components/Product/ProductStyled";

const Product = ({ product }: ProductProps): any => {
	return (
		<CardStyled className='my-3 p-3 rounded'>
			<ProductLink href={`/product/${product.vendorСode}`}>
				<Card.Img src={product.image} alt={product.name} variant='top' />
			</ProductLink>

			<Card.Body>
				<ProductLink href={`/product/${product.vendorСode}`}>
					<Card.Title as='div'>
						<Text variant='p2'>{product.name}</Text>
					</Card.Title>
				</ProductLink>
				<Card.Text as='div'>
					<Text variant='p2'>{product.price}.00$</Text>
				</Card.Text>
			</Card.Body>
		</CardStyled>
	);
};

export default Product;
