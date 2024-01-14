import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserDetails from "./reducers/UserDetails";
import WorkoutsList from "./reducers/WorkoutsList";

const rootReducer = combineReducers({
  userDetails: UserDetails,
  workoutsList: WorkoutsList,
});

const configuration = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
    // return getDefaultMiddleware().concat(logger);
  },
});

export default store;
export const persister = persistStore(store);
// persister.purge();
