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
import { useDispatch, useSelector } from "react-redux";

import LoginInput from "../../components/loginInput/LoginInput";
import { tryLogin } from "../../api/Login";

import { Strings } from "../../assets/strings/Strings";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import {
  updateLogIn,
  updateToken,
  updateUser,
} from "../../redux/reducers/UserDetails";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
          style: "default",
        },
      ],
      { cancelable: false }
    );
  };

  const submitLogin = async () => {
    Keyboard.dismiss();
    const result = await tryLogin(email, password);
    if (!result.success) {
      showAlert(result.message, Strings.WrongDetailsSummary);
      return;
    }
    showAlert(result.message, Strings.WelcomeAlertSummary);
    dispatch(updateToken(result.token));
    dispatch(updateUser(result.user));
    dispatch(updateLogIn(true));
    navigation.navigate(Routes.HomePage);
    return;
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <View style={style.container}>
        <Text style={style.welcomeHeader}>{Strings.Welcome}</Text>
        <View style={style.inputsContainer}>
          <LoginInput
            label={Strings.MailLabel}
            placeholder={Strings.MailPlaceholder}
            keyboardType={"email-address"}
            onChangeText={(value) => setEmail(value)}
          />
          <LoginInput
            label={Strings.PasswordLabel}
            placeholder={Strings.PasswordPlaceholder}
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
          <Text style={style.loginBtnText}>{Strings.LoginBtn}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
