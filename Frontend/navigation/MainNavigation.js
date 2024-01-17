import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";
import Workout from "../Screens/workout/Workout";
import HomePage from "../Screens/homePage/HomePage";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.HomePage}
    >
      <Stack.Screen
        name={Routes.WorkoutSelection}
        component={WorkoutSelection}
      />
      <Stack.Screen name={Routes.Workout} component={Workout} />
      <Stack.Screen name={Routes.HomePage} component={HomePage} />
    </Stack.Navigator>
  );
};
export default MainNavigation;