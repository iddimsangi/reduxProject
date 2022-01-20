import { actionTypes } from "../constants/actionTypes";
const initialState = {
  products: [{}],
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.SELECTED_PRODUCT:
      return state;
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return state;
  }
  return state;
};
export default productReducer;
