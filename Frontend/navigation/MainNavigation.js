import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";

import HomePage from "../Screens/homePage/HomePage";
import Login from "../Screens/login/Login";
import MyWorkoutsList from "../Screens/myWorkoutsList/MyWorkoutsList";
import Workout from "../Screens/workout/Workout";
import MusclesList from "../Screens/musclesList/MusclesList";
import MuscleExercisesBank from "../Screens/muscleExercisesBank/MuscleExercisesBank";
import TipsCategories from "../Screens/tipsCategories/TipsCategories";
import Tips from "../Screens/tips/Tips";

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.Login}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.HomePage}
    >
      <Stack.Screen name={Routes.MyWorkoutsList} component={MyWorkoutsList} />
      <Stack.Screen name={Routes.HomePage} component={HomePage} />
      <Stack.Screen name={Routes.Workout} component={Workout} />
      <Stack.Screen name={Routes.MusclesList} component={MusclesList} />
      <Stack.Screen
        name={Routes.MuscleExercisesBank}
        component={MuscleExercisesBank}
      />
      <Stack.Screen name={Routes.TipsCategories} component={TipsCategories} />
      <Stack.Screen name={Routes.Tips} component={Tips} />
    </Stack.Navigator>
  );
};
