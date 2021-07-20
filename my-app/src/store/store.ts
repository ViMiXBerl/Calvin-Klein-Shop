import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productCartReducer } from "modules/redux/reducer";

const rootReducer = combineReducers({
	productList: productListReducer,
	productCart: productCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

const store = createStore(
	rootReducer,

	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
