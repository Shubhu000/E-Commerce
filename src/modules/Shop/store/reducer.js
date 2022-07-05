import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  REMOVE_CART_ITEM,
  PRICE_PRODUCT,
  INCEMENT_QTY,
  DECEMENT_QTY,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "./actionType";
const initialState = {
  loading: false,
  Cart: [],
  Price: 0,
  Favourite: [],
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        Cart: payload ? [...state.Cart, payload] : payload,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        loading: false,
        Cart: state.Cart.filter((i) => i.id !== payload),
        Price: 0,
      };
    case PRICE_PRODUCT:
      return {
        ...state,
        loading: false,
        Price: state.Price + payload,
      };
    case INCEMENT_QTY:
      return {
        ...state,
        Cart: state.Cart.filter((item) =>
          item.id === payload.id ? (item.qty = item.qty + 1) : item
        ),
        Price: state.Price + payload.price,
      };
    case DECEMENT_QTY:
      return {
        ...state,
        Cart: state.Cart.filter((item) =>
          item.id === payload.id ? (item.qty = item.qty - 1) : item
        ),
        Price: state.Price - payload.price,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        loading: false,
        Favourite: payload ? [...state.Favourite, payload] : payload,
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        loading: false,
        Favourite: state.Favourite.filter((i) => i.id !== payload.id),
      };
    default:
      return state;
  }
};
export default shopReducer;
