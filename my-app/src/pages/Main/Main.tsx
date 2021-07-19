import Header from "modules/Header/Header";
// import { MainProps } from "pages/Main/types";
import NewProductsList from "modules/NewProductsList/NewProductsList";
import { Container } from "react-bootstrap";
import { Row, Col, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Text from "components/Text/Text";
import Button from "components/Button/Button";
import {
	StyledRow,
	StyledFavorites,
	ColStyled,
	TextColStyled,
	StyledContainer,
} from "pages/Main/MainStyled";
import { Round } from "assets";
import image from "assets/images/K2G221C6__2.png";
import imageLadiesWatches from "assets/images/Group 36.png";
import imageMensWatches from "assets/images/Group 37.png";

const Main = (): any => {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<main>
				<StyledContainer>
					<Row>
						<Col>
							<Text variant='h2'>CK Calvin Klein CITY</Text>
							<Text variant='p2'>Quarts movement for HIM</Text>
							<Text variant='p2'>
								The heart of this watch is a highly reliable Swiss quartz
								movement.
							</Text>
							<Row>
								<Col>
									<Button type='button' disabled={false}>
										<LinkContainer to='/catalog'>
											<Nav>
												<Text variant='p4'>Collection</Text>
											</Nav>
										</LinkContainer>
									</Button>
								</Col>
								<Col>
									<LinkContainer to='/favorites'>
										<Nav>
											<StyledFavorites />
										</Nav>
									</LinkContainer>
								</Col>
							</Row>
						</Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</StyledContainer>
				<StyledContainer>
					<Row className='text-center'>
						<Text variant='h2'>New products</Text>
					</Row>
					<NewProductsList />
				</StyledContainer>
				<StyledContainer>
					<Row>
						<TextColStyled>
							<StyledRow>
								<Round></Round>
								<Row>
									<Text variant='h3'>NEW COLLECTION</Text>
								</Row>

								<Text variant='h1'>2021</Text>
							</StyledRow>
							<Row>
								<Row>
									<Text variant='h4'>CALVIN KLEIN ESTABLISHED</Text>
								</Row>
								<Row>
									<Col>
										<Text variant='h6'>For HER</Text>
									</Col>
									<Col>
										<Text variant='p1'>
											The stylish design of this flawless accessory will
											elegantly complete your new look. Time for gorgeous women.
										</Text>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button type='button' disabled={false}>
											<LinkContainer to='/catalog'>
												<Nav>
													<Text variant='p4'>Go to catalog</Text>
												</Nav>
											</LinkContainer>
										</Button>
									</Col>
									<Col>
										<LinkContainer to='/favorites'>
											<Nav>
												<StyledFavorites />
											</Nav>
										</LinkContainer>
									</Col>
								</Row>
							</Row>
						</TextColStyled>
						<ColStyled>
							<Image src={image}></Image>
						</ColStyled>
					</Row>
				</StyledContainer>
				<StyledContainer>
					<Col>
						<Image src={imageLadiesWatches}></Image>
					</Col>
					<Col>
						<Image src={imageMensWatches}></Image>
					</Col>
				</StyledContainer>
			</main>
		</>
	);
};

export default Main;
