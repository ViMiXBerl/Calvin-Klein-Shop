import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Favorite } from "assets";

export const NavbarStyled = styled(Navbar.Collapse)`
	justify-content: flex-end;
`;

export const NavStyled = styled(Nav.Link)`
	margin: 1.2rem;
	align-items: center;
`;

export const FavoriteStyled = styled(Favorite)`
	height: 26px;
	padding-top: 5px;
`;
