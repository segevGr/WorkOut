import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import LoginInput from "../../components/loginInput/LoginInput";
import { tryLogin } from "../../api/Login";

import Strings from "../../assets/strings/Strings";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import {
  updateLogIn,
  updateToken,
  updateUser,
} from "../../redux/reducers/UserDetails";
import ShowAlert from "../../utils/ShowAlert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isLoginFormEmpty = () => {
    return email === "" || password === "";
  };

  const submitLogin = async () => {
    try {
      Keyboard.dismiss();
      const result = await tryLogin(email.trim(), password);
      ShowAlert({
        title: Strings.WelcomeAlert,
        message: Strings.WelcomeAlertSummary,
        btnText: "OK",
        pressFunc: null,
        cancelable: false,
      });
      dispatch(updateToken(result.token));
      dispatch(updateUser(result.user));
      dispatch(updateLogIn(true));
      return;
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    if (error.statusCode === 401) {
      ShowAlert({
        title: Strings.WrongDetails,
        message: Strings.WrongDetailsSummary,
        btnText: "OK",
        pressFunc: null,
        cancelable: false,
      });
    } else if (error.statusCode === 400) {
      ShowAlert({
        title: Strings.Error,
        message: Strings.MissingDetails,
        btnText: "OK",
        pressFunc: null,
        cancelable: false,
      });
    } else {
      ShowAlert({
        title: Strings.Error,
        message: Strings.SomethingWrong,
        btnText: "OK",
        pressFunc: null,
        cancelable: false,
      });
    }
    console.error(`Error in tryLogin: [${error}]`);
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
