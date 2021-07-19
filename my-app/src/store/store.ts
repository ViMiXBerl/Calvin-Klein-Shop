import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "modules/redux/reducer";

const rootReducer = combineReducers({
	productList: productListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

const store = createStore(
	rootReducer,

	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
