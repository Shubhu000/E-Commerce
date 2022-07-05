import axios from "axios";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_STATE,
} from "./actionTypes";

/*FETCH PRODUCTS*/

export const fetchProducts = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products", data);
      if (res.data) {
        dispatch(fetchProductsSuccess(res.data));
      }
    } catch (err) {
      dispatch(fetchProductsError(err.message));
    }
  };
};
export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductsError = (message) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: message,
});

export const fetchState = (data) => ({
  type: FETCH_STATE,
  payload: data,
});
