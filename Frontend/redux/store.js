import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserDetails from "./reducers/UserDetails";
import UserExerciseList from "./reducers/UserExerciseList";
import TipsList from "./reducers/TipsList";
import MenuBankList from "./reducers/MenuBankList";

const rootReducer = combineReducers({
  userExerciseList: UserExerciseList,
  tipsList: TipsList,
  menuBankList: MenuBankList,
  userDetails: UserDetails,
});

const configuration = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
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
