import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";

import LoadingOverlay from "./utils/LoadingOverlay";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

import store from "./redux/store";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [fontsLoaded] = useFonts({
    "NotoSansHebrew-Black": require("./assets/fonts/NotoSansHebrew-Black.ttf"),
    "NotoSansHebrew-Bold": require("./assets/fonts/NotoSansHebrew-Bold.ttf"),
    "NotoSansHebrew-ExtraBold": require("./assets/fonts/NotoSansHebrew-ExtraBold.ttf"),
    "NotoSansHebrew-ExtraLight": require("./assets/fonts/NotoSansHebrew-ExtraLight.ttf"),
    "NotoSansHebrew-Light": require("./assets/fonts/NotoSansHebrew-Light.ttf"),
    "NotoSansHebrew-Medium": require("./assets/fonts/NotoSansHebrew-Medium.ttf"),
    "NotoSansHebrew-Regular": require("./assets/fonts/NotoSansHebrew-Regular.ttf"),
    "NotoSansHebrew-SemiBold": require("./assets/fonts/NotoSansHebrew-SemiBold.ttf"),
    "NotoSansHebrew-Thin": require("./assets/fonts/NotoSansHebrew-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <Provider store={store}>
      <StatusBar hidden />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
