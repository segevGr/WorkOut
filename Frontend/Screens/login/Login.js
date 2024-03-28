import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

import { useDispatch } from "react-redux";
import {
  updateLogIn,
  updateToken,
  updateUser,
} from "../../redux/reducers/UserDetails";

import { tryLogin } from "../../api/Login";
import ShowAlert, { somethingWrongAlert } from "../../utils/ShowAlert";

import LoginInput from "../../components/loginInput/LoginInput";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import Colors from "../../assets/styles/Colors";

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
        btnText: Strings.Submit,
        pressFunc: null,
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
        btnText: Strings.Submit,
        pressFunc: null,
      });
    } else if (error.statusCode === 400) {
      ShowAlert({
        title: Strings.Error,
        message: Strings.MissingDetails,
        btnText: Strings.Submit,
        pressFunc: null,
      });
    } else {
      somethingWrongAlert();
      console.error(`Error in tryLogin: [${error}]`);
    }
  };

  return (
    <View style={style.flex1}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../../assets/pictures/LoginBackground.png")}
          resizeMode="cover"
        />
        <View style={style.blackOpacity} />
      </View>
      <View style={style.contentContainer}>
        <View style={style.flex1}>
          <Text style={style.welcomeHeader}>{Strings.Welcome}</Text>
        </View>
        <View style={style.fieldsContainer}>
          <LoginInput
            placeholder={Strings.MailPlaceholder}
            keyboardType={"email-address"}
            onChangeText={setEmail}
            styles={style.itemContainer}
          />
          <LoginInput
            placeholder={Strings.PasswordPlaceholder}
            secureTextEntry={true}
            onChangeText={setPassword}
            styles={style.itemContainer}
          />

          <TouchableOpacity
            disabled={isLoginFormEmpty()}
            style={
              isLoginFormEmpty()
                ? [style.loginBtn, style.itemContainer, style.disabled]
                : [style.loginBtn, style.itemContainer]
            }
            onPress={() => submitLogin()}
          >
            <Text style={style.loginBtnText}>{Strings.LoginBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
