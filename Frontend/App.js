import React from "react";
import { Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
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
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
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
