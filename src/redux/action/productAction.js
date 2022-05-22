const SELECT_PRODUCTS = 'SELECT_PRODUCTS';
const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
const REAMOVE_SELECTED_PRODUCT = 'REAMOVE_SELECTED_PRODUCT';

const intialState = {
  products: [],
};

export const setProduct = (products) => ({
  type: SELECT_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = (product) => ({
  type: REAMOVE_SELECTED_PRODUCT,
  payload: product,
});

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectAddReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REAMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default productReducer;
