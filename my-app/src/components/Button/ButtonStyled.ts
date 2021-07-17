import styled from "styled-components";
import { colors } from "styles/colors";

export const ButtonStyled = styled.button`
	cursor: pointer;
	padding: 1.5rem;
	background-color: transparent;
	filter: drop-shadow(0px 3px 4px rgba(32, 32, 32, 0.25));
	border: 1px solid ${colors.borderColor};
	border-radius: 44px;
	box-sizing: border-box;
`;
