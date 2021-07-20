import { IInitialState, IInitialStateProduct } from "./types";
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_CART_REQUEST,
	PRODUCT_CART_SUCCESS,
	PRODUCT_CART_FAIL,
} from "constants/productConstants";

const initialState: IInitialState = {
	products: [],
	loading: false,
	error: "",
};
const initialStateProduct: IInitialStateProduct = {
	product: {},
	loading: false,
	error: "",
};

export const productListReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case PRODUCT_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productCartReducer = (
	state = initialStateProduct,
	action: any
) => {
	switch (action.type) {
		case PRODUCT_CART_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_CART_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		case PRODUCT_CART_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
