import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CardProductImage = styled.img`
	max-width: 100%;
`;

export const CardProductBody = styled.div`
	max-width: 100%;

	padding: 1rem 1rem;
`;

export const CardTitle = styled.div`
	margin-bottom: 0.5rem;
`;

export const ProductLink = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

export const CardStyled = styled(Card)`
	margin: 1.2rem;
`;
