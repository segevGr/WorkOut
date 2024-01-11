import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";

import UserDetails from "./reducers/UserDetails";

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
