import React, { useState } from "react";
import { SafeAreaView, ScrollView, Pressable, View, Text } from "react-native";

import LoginInput from "../../components/loginInput/LoginInput";

import { Strings } from "../../assets/strings/Strings";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoginFormEmpty = () => {
    return email === "" || password === "";
  };

  const submitLogin = () => {
    console.log("ttt");
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
        <Pressable
          disabled={isLoginFormEmpty()}
          style={
            isLoginFormEmpty()
              ? [style.loginBtn, style.disabled]
              : style.loginBtn
          }
          onPress={() => submitLogin()}
        >
          <Text style={style.loginBtnText}>{Strings.loginBtn}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
