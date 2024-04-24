import React, { useEffect, useRef, useState } from "react";
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

import Strings from "../../assets/strings/Strings";
import style from "./style";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFieldsFilled, setIsFieldsFilled] = useState(false);
  const [loginLoaded, setLoginLoaded] = useState(false);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

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
      console.error(
        `E rror in tryLogin: [${error}] Status code ${error.statusCode}`
      );
    }
  };

  const focusPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  useEffect(() => {
    email === "" || password === ""
      ? setIsFieldsFilled(false)
      : setIsFieldsFilled(true);
  }, [email, password]);

  if (loginLoaded) {
    return <LoadingOverlay loadingText={Strings.LoginLoadingMessage} />;
  }

  return (
    <View style={style.flex1}>
      <View style={style.flex1}>
        <Image
          style={style.image}
          source={require("../../assets/pictures/LoginBackground.png")}
          resizeMode="cover"
        />
        <View style={style.blackOpacity} />
      </View>
      <View style={style.contentContainer}>
        <Text style={style.welcomeHeader}>{Strings.Welcome}</Text>
        <TextInput
          placeholder={Strings.MailPlaceholder}
          placeholderTextColor={Colors.white}
          style={[style.input, style.itemContainer]}
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={focusPassword}
          returnKeyType="next"
          keyboardType={"email-address"}
        />
        <TextInput
          placeholder={Strings.PasswordPlaceholder}
          placeholderTextColor={Colors.white}
          style={[style.input, style.itemContainer]}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={submitLogin}
          returnKeyType="done"
          secureTextEntry={true}
          ref={passwordRef}
        />

        <TouchableOpacity
          disabled={!isFieldsFilled}
          style={
            isFieldsFilled
              ? [style.loginBtn, style.itemContainer]
              : [style.loginBtn, style.itemContainer, style.disabled]
          }
          onPress={() => submitLogin()}
        >
          <Text style={style.loginBtnText}>{Strings.LoginBtn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
