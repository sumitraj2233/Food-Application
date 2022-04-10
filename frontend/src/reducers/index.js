import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { placeOrderReducer } from "./orderReducer";
import { registerUserReducer, loginUserReducer } from "./userReducer";
export const allReducers = combineReducers({
  product: productReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
});
