const SELECT_PRODUCTS = "SELECT_PRODUCTS";
const SELECTED_PRODUCT = "SELECTED_PRODUCT";
// const REAMOVE_SELECTED_PRODUCT = "REAMOVE_SELECTED_PRODUCT";

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


