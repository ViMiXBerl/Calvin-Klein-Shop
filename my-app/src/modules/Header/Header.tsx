import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HeaderProps } from "modules/Header/types";
import logo from "assets/images/klipartz 1.png";
import { Search, Cart } from "assets";

import Text from "components/Text/Text";
import {
	NavbarStyled,
	NavStyled,
	FavoriteStyled,
} from "modules/Header/Headerstyled";

const Header = ({ children }: HeaderProps): any => {
	return (
		<header>
			<Navbar expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/main'>
						<Navbar.Brand>
							<Image src={logo}></Image>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<NavbarStyled id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/main'>
								<NavStyled>
									<Text variant='p2'>Main</Text>
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/catalog'>
								<NavStyled>
									<Text variant='p2'>Catalog</Text>
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/contacts'>
								<NavStyled>
									<Text variant='p2'>Contacts</Text>
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/delivery'>
								<NavStyled>
									<Text variant='p2'>Delivery</Text>
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/stores'>
								<NavStyled>
									<Text variant='p2'>Stores</Text>
								</NavStyled>
							</LinkContainer>
						</Nav>
					</NavbarStyled>
					<NavbarStyled id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/search'>
								<NavStyled>
									<Search />
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<NavStyled>
									<Cart />
								</NavStyled>
							</LinkContainer>
							<LinkContainer to='/favorites'>
								<NavStyled>
									<FavoriteStyled />
								</NavStyled>
							</LinkContainer>
						</Nav>
					</NavbarStyled>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
