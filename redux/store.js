import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./reducers/UserDetails";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
  userDetails: UserDetails,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export default store;
