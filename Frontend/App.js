import React from "react";
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import store from "./redux/store";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Heebo-Black": require("./assets/fonts/Heebo-Black.ttf"),
    "Heebo-Bold": require("./assets/fonts/Heebo-Bold.ttf"),
    "Heebo-ExtraBold": require("./assets/fonts/Heebo-ExtraBold.ttf"),
    "Heebo-ExtraLight": require("./assets/fonts/Heebo-ExtraLight.ttf"),
    "Heebo-Light": require("./assets/fonts/Heebo-Light.ttf"),
    "Heebo-Medium": require("./assets/fonts/Heebo-Medium.ttf"),
    "Heebo-Regular": require("./assets/fonts/Heebo-Regular.ttf"),
    "Heebo-SemiBold": require("./assets/fonts/Heebo-SemiBold.ttf"),
    "Heebo-Thin": require("./assets/fonts/Heebo-Thin.ttf"),
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
      <StatusBar hidden />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
