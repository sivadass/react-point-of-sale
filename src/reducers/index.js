import { combineReducers } from "redux";
import header from "./header";
import appStatus from "./app-status";

const rootReducer = combineReducers({
  header,
  appStatus
});

export default rootReducer;
