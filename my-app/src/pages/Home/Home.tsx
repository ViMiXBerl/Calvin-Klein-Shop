import Header from "modules/Header/Header";
import { HomeProps } from "pages/Home/types";
import NewProductsList from "modules/NewProductsList/NewProductsList";
import { Container } from "react-bootstrap";

const Home = ({ children }: HomeProps): any => {
	return (
		<>
			<Container>
				<Header />
			</Container>

			<Container>
				<NewProductsList />
			</Container>
		</>
	);
};

export default Home;
