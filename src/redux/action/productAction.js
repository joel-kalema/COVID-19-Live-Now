const SELECT_PRODUCTS = "SELECT_PRODUCTS";
const SELECTED_PRODUCT = "SELECTED_PRODUCT";
// const REAMOVE_SELECTED_PRODUCT = "REAMOVE_SELECTED_PRODUCT";

const intialState = {
  products: [],
}

export const setProduct = (products) => {
  return {
    type: SELECT_PRODUCTS,
    payload: products, 
  }
}

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product, 
  }
}

export const productReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case SELECT_PRODUCTS :
    return {...state, products:payload};
    default:
      return state;
  }
}

export default productReducer;