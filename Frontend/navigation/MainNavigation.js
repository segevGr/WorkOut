import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";

import HomePage from "../Screens/homePage/HomePage";
import Login from "../Screens/login/Login";
import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";
import Workout from "../Screens/workout/Workout";
import MusclesList from "../Screens/musclesList/MusclesList";
import MuscleExercisesBank from "../Screens/muscleExercisesBank/MuscleExercisesBank";
import TipsCategories from "../Screens/tipsCategories/TipsCategories";
import Tips from "../Screens/tips/Tips";
import MenuBankList from "../Screens/menuBankList/MenuBankList";
import MyMenusList from "../Screens/myMenusList/MyMenusList";

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
      <Stack.Screen
        name={Routes.WorkoutSelection}
        component={WorkoutSelection}
      />
      <Stack.Screen name={Routes.HomePage} component={HomePage} />
      <Stack.Screen name={Routes.Workout} component={Workout} />
      <Stack.Screen name={Routes.MusclesList} component={MusclesList} />
      <Stack.Screen
        name={Routes.MuscleExercisesBank}
        component={MuscleExercisesBank}
      />
      <Stack.Screen name={Routes.TipsCategories} component={TipsCategories} />
      <Stack.Screen name={Routes.Tips} component={Tips} />
      <Stack.Screen name={Routes.MenuBankList} component={MenuBankList} />
      <Stack.Screen name={Routes.MyMenusList} component={MyMenusList} />
    </Stack.Navigator>
  );
};
