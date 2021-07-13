import { Switch, Route, Redirect } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";

import {
	Main,
	Catalog,
	Contacts,
	Delivery,
	Stores,
	ShoppingCart,
	Payment,
	CardProduct,
	Favorites,
	NotFound,
	Error,
} from "pages";

function AppRouter() {
	return (
		<Switch>
			<Route exact path={pageRoutes.MAIN_PAGE}>
				<Main />
			</Route>
			<Route exact path={pageRoutes.CATALOG}>
				<Catalog />
			</Route>
			<Route exact path={pageRoutes.CONTACTS}>
				<Contacts />
			</Route>
			<Route exact path={pageRoutes.DELIVERY}>
				<Delivery />
			</Route>
			<Route exact path={pageRoutes.STORES}>
				<Stores />
			</Route>
			<Route exact path={pageRoutes.SHOPPING_CART}>
				<ShoppingCart />
			</Route>
			<Route exact path={pageRoutes.PAYMENT}>
				<Payment />
			</Route>
			<Route exact path={pageRoutes.CARD_PRODUCT}>
				<CardProduct />
			</Route>
			<Route exact path={pageRoutes.FAVORITES}>
				<Favorites />
			</Route>
			<Redirect exact from='/' to={pageRoutes.NOT_FOUND}>
				<NotFound />
			</Redirect>
			<Route exact path={pageRoutes.ERROR}>
				<Error />
			</Route>
		</Switch>
	);
}

export default AppRouter;
