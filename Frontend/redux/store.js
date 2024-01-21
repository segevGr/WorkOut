import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import WorkoutsList from "./reducers/WorkoutsList";
import ExerciseList from "./reducers/ExerciseList";
import UserExerciseList from "./reducers/UserExerciseList";
import MusclesBankList from "./reducers/MusclesBankList";
import TipsList from "./reducers/TipsList";

const rootReducer = combineReducers({
  workoutsList: WorkoutsList,
  exerciseList: ExerciseList,
  userExerciseList: UserExerciseList,
  musclesBankList: MusclesBankList,
  tipsList: TipsList,
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
persister.purge();
