import { ProductProps } from "components/Product/types";
import Text from "components/Text/Text";
import { Card } from "react-bootstrap";

import {
	ProductLink,
	CardStyled,
	CardProductImage,
} from "components/Product/ProductStyled";

const Product = ({ product }: ProductProps): any => {
	return (
		<>
			<CardStyled className='my-3 p-3 rounded'>
				<ProductLink to={`/product/cardProduct/${product._id}`}>
					<CardProductImage
						src={product.image}
						alt={product.name}
						variant='top'
					/>
				</ProductLink>

				<Card.Body>
					<ProductLink to={`/product/cardProduct/${product._id}`}>
						<Card.Title as='div'>
							<Text variant='p2'>{product.name}</Text>
						</Card.Title>
					</ProductLink>
					<Card.Text as='div'>
						<Text variant='p2'>{product.price}.00$</Text>
					</Card.Text>
				</Card.Body>
			</CardStyled>
		</>
	);
};

export default Product;
