import { NETWORK_STATUS } from "./action-types";

export const navigatorOnLine = () => ({
  type: NETWORK_STATUS,
  payload: navigator.onLine
});