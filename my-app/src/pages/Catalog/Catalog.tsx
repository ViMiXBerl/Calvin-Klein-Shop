// import { CatalogProps } from "pages/Catalog/types";
import Header from "modules/Header/Header";
import { AllProducts } from "services/api/Api";

const Catalog = () => {
	return (
		<>
			<Header />
			<AllProducts />
		</>
	);
};

export default Catalog;
