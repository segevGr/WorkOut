import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";
import Workout from "../Screens/workout/Workout";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.Workout}
    >
      <Stack.Screen
        name={Routes.WorkoutSelection}
        component={WorkoutSelection}
      />
      <Stack.Screen name={Routes.Workout} component={Workout} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
