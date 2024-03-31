import React, { useState } from "react";
import { TouchableOpacity, View, Text, Keyboard, Image } from "react-native";

import { useDispatch } from "react-redux";
import {
  updateLogIn,
  updateToken,
  updateUser,
} from "../../redux/reducers/UserDetails";

import { tryLogin } from "../../api/Login";
import ShowAlert, { somethingWrongAlert } from "../../utils/ShowAlert";
import LoadingOverlay from "../../utils/LoadingOverlay";

import LoginInput from "../../components/loginInput/LoginInput";

import Strings from "../../assets/strings/Strings";
import style from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoaded, setLoginLoaded] = useState(false);

  const dispatch = useDispatch();

  const isLoginFormEmpty = () => {
    return email === "" || password === "";
  };

  const submitLogin = async () => {
    try {
      Keyboard.dismiss();
      setLoginLoaded(true);
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
    } catch (error) {
      handleLoginError(error);
    } finally {
      setLoginLoaded(false);
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

  if (loginLoaded) {
    return <LoadingOverlay loadingText={Strings.LoginLoadingMessage} />;
  }

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
