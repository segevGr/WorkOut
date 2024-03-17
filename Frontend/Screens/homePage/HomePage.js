import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  updateLogIn,
  updateToken,
  updateUser,
} from "../../redux/reducers/UserDetails";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";

import Strings from "../../assets/strings/Strings";
import ShowAlert from "../../utils/ShowAlert";

import style from "./style";

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userDetails.user.name);

  const showLogOutAlert = () => {
    ShowAlert({
      title: Strings.LogOutTitle,
      message: null,
      btnText: Strings.Yes,
      pressFunc: () => logout(),
      cancelText: Strings.No,
    });
  };

  const logout = () => {
    dispatch(updateLogIn(false));
    dispatch(updateToken(null));
    dispatch(updateUser(null));
  };

  return (
    <ImageBackground
      source={require("../../assets/pictures/HomePageBackground.png")}
      style={style.background}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={`${Strings.WelcomeMessage} ${username}`}
          textColor={"#FFF"}
          canGoBack={false}
        />
        <View style={style.optionsContainer}>
          <TouchableOpacity
            style={style.btnContainer}
            onPress={() => navigation.navigate(Routes.MyWorkoutsList)}
          >
            <Text style={style.optionText}>{Strings.MyWorkouts}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnContainer}
            onPress={() => navigation.navigate(Routes.MusclesList)}
          >
            <Text style={style.optionText}>{Strings.ExercisesBank}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnContainer}
            onPress={() => navigation.navigate(Routes.TipsCategories)}
          >
            <Text style={style.optionText}>{Strings.Tips}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnContainer}
            onPress={() => showLogOutAlert()}
          >
            <Text style={style.optionText}>{Strings.LogOut}</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.versionDetails}>{Strings.Version}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
