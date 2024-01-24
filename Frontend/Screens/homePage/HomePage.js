import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";

import { Strings } from "../../assets/strings/Strings";
import style from "./style";

const HomePage = ({ navigation }) => {
  const username = "שגב";

  return (
    <ImageBackground
      source={require("../../assets/pictures/HomePageBackground.png")}
      style={style.background}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={`${Strings.WelcomeMessage} ${username}`}
          textColor={"#FFF"}
        />
        <View style={style.optionsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.WorkoutSelection)}
          >
            <Text style={style.optionText}>{Strings.MyWorkouts}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>{Strings.MyMenu}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.MusclesBank)}
          >
            <Text style={style.optionText}>{Strings.ExercisesBank}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.MenuBankList)}
          >
            <Text style={style.optionText}>{Strings.MenuBank}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.TipsCategories)}
          >
            <Text style={style.optionText}>{Strings.Tips}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>{Strings.LogOut}</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.versionDetails}>{Strings.Version}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
