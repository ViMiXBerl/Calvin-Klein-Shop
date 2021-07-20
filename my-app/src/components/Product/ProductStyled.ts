import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardProductImage = styled(Card.Img)``;

export const ProductLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
`;

export const CardStyled = styled(Card)`
	margin: 1.2rem;
`;
