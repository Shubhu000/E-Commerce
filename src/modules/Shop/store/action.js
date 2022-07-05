import axios from "axios";

import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  REMOVE_CART_ITEM,
  PRICE_PRODUCT,
  INCEMENT_QTY,
  DECEMENT_QTY,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "./actionType";

/*Add to Cart*/
export const addToCartSuccess = (data) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: data,
});
export const addToCartError = (message) => ({
  type: ADD_TO_CART_ERROR,
  payload: message,
});

/*Remove Cart Item*/

export const removeCartItem = (data) => ({
  type: REMOVE_CART_ITEM,
  payload: data,
});

export const fetchProductPrice = (data) => ({
  type: PRICE_PRODUCT,
  payload: data,
});

export const incementQty = (data) => ({
  type: INCEMENT_QTY,
  payload: data,
});

export const decementQty = (data) => ({
  type: DECEMENT_QTY,
  payload: data,
});

/*Favourite*/

export const addToFavourite = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});
export const removeFromFavourite = (data) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: data,
});
