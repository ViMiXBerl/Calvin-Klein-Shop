import Header from "modules/Header/Header";
import { MainProps } from "pages/Main/types";
import NewProductsList from "modules/NewProductsList/NewProductsList";
import { Container } from "react-bootstrap";

const Main = ({ children }: MainProps): any => {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<main>
				<Container>
					<NewProductsList />
				</Container>
			</main>
		</>
	);
};

export default Main;
