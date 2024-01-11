import React from "react";
import { Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import store from "./redux/store";
import { useFonts } from "expo-font";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <Text>App Loading</Text>
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
