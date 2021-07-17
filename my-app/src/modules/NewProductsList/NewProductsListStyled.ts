import styled from "styled-components";
import { Row } from "react-bootstrap";
import { colors } from "styles/colors";
import { Favorites } from "assets";

export const StyledRow = styled(Row)`
	background-color: ${colors.braun};
`;

export const StyledFavorites = styled(Favorites)`
	margin: 1rem 1rem;
`;
