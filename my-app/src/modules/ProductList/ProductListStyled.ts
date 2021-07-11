import styled from "styled-components";

export const ProductListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const CardProduct = styled.div`
	background-color: chartreuse;
	max-width: 23%;
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;

export const NewProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	::hover {
		background: url(pngwing.png);
		filter: drop-shadow(9px 15px 20px rgba(0, 0, 0, 0.25));
	}
`;
