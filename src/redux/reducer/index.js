import { combineReducers } from 'redux';
import { productReducer, selectAddReducer } from '../action/productAction';

const reducer = combineReducers({
  allPreoducts: productReducer,
  product: selectAddReducer,

});

export default reducer;
