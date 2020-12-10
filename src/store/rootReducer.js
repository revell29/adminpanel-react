import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import templateReducer from "./templateReducer";
import { authReducer } from "../App/modules/auth/store/reducer";

const createRootReducer = (history) =>
  combineReducers({
    templateReducer,
    authReducer,
    router: connectRouter(history),
  });
export default createRootReducer;
