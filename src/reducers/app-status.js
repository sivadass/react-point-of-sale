import { NETWORK_STATUS } from "../actions/action-types";

const initialState = {
  isOnline: false
};

const appStatus = (state = initialState, action) => {
  if (action.type === NETWORK_STATUS) {
    return Object.assign({}, state, {
      isOnline: action.payload
    });
  }
  return state;
};

export default appStatus;
