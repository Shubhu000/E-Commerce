import { combineReducers } from "redux";
import homeReducer from "../modules/Home/store/reducer";
import shopReducer from "../modules/Shop/store/reducer";

export default combineReducers({
  Home: homeReducer,
  Shop: shopReducer,
});
