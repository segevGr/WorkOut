import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";
import Workout from "../Screens/workout/Workout";
import HomePage from "../Screens/homePage/HomePage";
import MusclesBank from "../Screens/musclesBank/MusclesBank";
import MuscleBank from "../Screens/muscleBank/MuscleBank";
import Tips from "../Screens/tipts/Tips";

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
      <Stack.Screen name={Routes.Tips} component={Tips} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
