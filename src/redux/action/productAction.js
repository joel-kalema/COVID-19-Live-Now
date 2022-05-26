const SELECT_COUNTRY = 'SELECT_COUNTRY';
const SELECTED_COUNTRY = 'SELECTED_COUNTRY';
const REAMOVE_SELECTED_COUNTRY = 'REAMOVE_SELECTED_COUNTRY';

const intialState = {
  products: [],
};

export const setProduct = (products) => ({
  type: SELECT_COUNTRY,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: SELECTED_COUNTRY,
  payload: product,
});

export const removeSelectedProduct = (product) => ({
  type: REAMOVE_SELECTED_COUNTRY,
  payload: product,
});

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SELECT_COUNTRY:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectAddReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_COUNTRY:
      return { ...state, ...payload };
    case REAMOVE_SELECTED_COUNTRY:
      return {};
    default:
      return state;
  }
};

export default productReducer;
