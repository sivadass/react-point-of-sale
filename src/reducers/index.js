import { combineReducers } from "redux";
import { DO_SOME_ACTION } from "../actions";

const initialState = {
  isLoggedIn: false
};

const someUserData = (state = initialState, action) => {
  if (action.type === DO_SOME_ACTION) {
    return Object.assign({}, state, {
      isLoggedIn: action.payload
    });
  }
  return state;
};

const rootReducer = combineReducers({
  someUserData
});

export default rootReducer;