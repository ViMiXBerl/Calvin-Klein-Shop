import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { colors } from "styles/colors";
import { Favorites } from "assets";

export const StyledContainer = styled(Container)`
	margin: 7rem auto;
`;

export const StyledRow = styled(Row)`
	background-color: ${colors.braun};
	padding: 12%;
	position: relative;
`;

export const StyledFavorites = styled(Favorites)`
	margin: 1rem 1rem;
`;

export const ColStyled = styled(Col)`
	padding: 0;
`;

export const TextColStyled = styled(Col)`
	width: 50%;
`;
