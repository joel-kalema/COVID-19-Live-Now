import { combineReducers } from "redux";
import productReducer from '../action/productAction';

 const reducer = combineReducers({
  allPreoducts: productReducer,
});

export default reducer;