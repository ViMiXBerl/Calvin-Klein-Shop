import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "./types";
import { Action } from "redux";
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_CART_REQUEST,
	PRODUCT_CART_SUCCESS,
	PRODUCT_CART_FAIL,
} from "constants/productConstants";

export const request = () => {
	return { type: PRODUCT_LIST_REQUEST };
};

export const success = () => {
	return { type: PRODUCT_LIST_SUCCESS };
};

export const fail = () => {
	return { type: PRODUCT_LIST_FAIL };
};

export const fetchListProducts = (): ThunkAction<
	void,
	IInitialState,
	null,
	Action
> => {
	return async (dispath) => {
		try {
			dispath({ type: PRODUCT_LIST_REQUEST });

			const { data } = await axios.get("/api/products");

			dispath({ type: PRODUCT_LIST_SUCCESS, payload: data });
		} catch (error) {
			dispath({
				type: PRODUCT_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};

export const fetchCartProduct = (
	id: any
): ThunkAction<void, IInitialState, null, Action> => {
	return async (dispath) => {
		try {
			dispath({ type: PRODUCT_CART_REQUEST });

			const { data } = await axios.get(`/api/products/${id}`);

			dispath({ type: PRODUCT_CART_SUCCESS, payload: data });
		} catch (error) {
			dispath({
				type: PRODUCT_CART_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
