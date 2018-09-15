import { TOGGLE_CART, TOGGLE_MENU } from "../actions/action-types";

const initialState = {
  isMenuOpen: true,
  isCartOpen: false
};

const header = (state = initialState, action) => {
  if (action.type === TOGGLE_MENU) {
    return Object.assign({}, state, {
      isMenuOpen: action.payload
    });
  }
  if (action.type === TOGGLE_CART) {
    return Object.assign({}, state, {
      isCartOpen: action.payload
    });
  }
  return state;
};

export default header;
