import { combineReducers, Reducer, AnyAction } from "redux";
import appReducer from "./Reducers/appReducers";
interface AppState {
  app: any;
  theme: any;
  login: any;
  auth: any;
}

const appReducers: Reducer<AppState, AnyAction> = combineReducers({
  app: appReducer,
})

const allReducers: Reducer<AppState, AnyAction> = (state: AppState, action: AnyAction) => {
  return appReducers(state, action);
};

export default allReducers;
