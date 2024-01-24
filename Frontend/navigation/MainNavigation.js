import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";

import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";
import Workout from "../Screens/workout/Workout";
import HomePage from "../Screens/homePage/HomePage";
import MusclesBank from "../Screens/musclesBank/MusclesBank";
import MuscleBank from "../Screens/muscleBank/MuscleBank";
import TipsCategories from "../Screens/tipsCategories/TipsCategories";
import Tips from "../Screens/tips/Tips";
import MenuBankList from "../Screens/menuBankList/MenuBankList";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.HomePage}
    >
      <Stack.Screen
        name={Routes.WorkoutSelection}
        component={WorkoutSelection}
      />
      <Stack.Screen name={Routes.Workout} component={Workout} />
      <Stack.Screen name={Routes.HomePage} component={HomePage} />
      <Stack.Screen name={Routes.MusclesBank} component={MusclesBank} />
      <Stack.Screen name={Routes.MuscleBank} component={MuscleBank} />
      <Stack.Screen name={Routes.TipsCategories} component={TipsCategories} />
      <Stack.Screen name={Routes.Tips} component={Tips} />
      <Stack.Screen name={Routes.MenuBankList} component={MenuBankList} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
