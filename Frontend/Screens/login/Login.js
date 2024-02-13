import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Keyboard,
} from "react-native";

import { Routes } from "../../navigation/Routes";

import LoginInput from "../../components/loginInput/LoginInput";

import { tryLogin } from "../../api/Login";

import { Strings } from "../../assets/strings/Strings";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoginFormEmpty = () => {
    return email === "" || password === "";
  };

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => null,
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  const submitLogin = async () => {
    Keyboard.dismiss();
    const result = await tryLogin(email, password);
    if (!result.success) {
      showAlert(result.message, Strings.wrongDetailsSummary);
      return;
    }
    showAlert(result.message, Strings.welcomeAlertSummary);
    navigation.navigate(Routes.HomePage);
    return;
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <View style={style.container}>
        <Text style={style.welcomeHeader}>{Strings.Welcome}</Text>
        <View style={style.inputsContainer}>
          <LoginInput
            label={Strings.mailLabel}
            placeholder={Strings.mailPlaceholder}
            keyboardType={"email-address"}
            onChangeText={(value) => setEmail(value)}
          />
          <LoginInput
            label={Strings.passwordLabel}
            placeholder={Strings.passwordPlaceholder}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <TouchableOpacity
          disabled={isLoginFormEmpty()}
          style={
            isLoginFormEmpty()
              ? [style.loginBtn, style.disabled]
              : style.loginBtn
          }
          onPress={() => submitLogin()}
        >
          <Text style={style.loginBtnText}>{Strings.loginBtn}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
