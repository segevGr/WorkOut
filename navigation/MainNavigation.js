import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import WorkoutSelection from "../Screens/workoutSelection/WorkoutSelection";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.WorkoutSelection}
    >
      <Stack.Screen
        name={Routes.WorkoutSelection}
        component={WorkoutSelection}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
