import { Navbar, Nav, Container, Image } from "react-bootstrap";
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
					<Navbar.Brand href='/main'>
						<Image src={logo}></Image>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<NavbarStyled id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<NavStyled href='/main'>
								<Text variant='p2'>Main</Text>
							</NavStyled>
							<NavStyled href='/catalog'>
								<Text variant='p2'>Catalog</Text>
							</NavStyled>
							<NavStyled href='/contacts'>
								<Text variant='p2'>Contacts</Text>
							</NavStyled>
							<NavStyled href='/delivery'>
								<Text variant='p2'>Delivery</Text>
							</NavStyled>
							<NavStyled href='/stores'>
								<Text variant='p2'>Stores</Text>
							</NavStyled>
						</Nav>
					</NavbarStyled>
					<NavbarStyled id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<NavStyled href='/search'>
								<Search />
							</NavStyled>
							<NavStyled href='/cart'>
								<Cart />
							</NavStyled>
							<NavStyled href='/favorites'>
								<FavoriteStyled />
							</NavStyled>
						</Nav>
					</NavbarStyled>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
