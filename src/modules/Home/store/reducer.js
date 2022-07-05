import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_STATE,
} from "./actionTypes";

const initialState = {
  loading: false,
  Product: [],
  State: false,
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        Product: payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case FETCH_STATE:
      return {
        ...state,
        State: !state.Show,
      };
    default:
      return state;
  }
};
export default homeReducer;
