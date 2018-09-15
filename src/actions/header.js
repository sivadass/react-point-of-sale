import { TOGGLE_MENU, TOGGLE_CART } from "./action-types";

export const toggleMenu = isOpen => ({
  type: TOGGLE_MENU,
  payload: isOpen
});

export const toggleCart = isOpen => ({
  type: TOGGLE_CART,
  payload: isOpen
});
