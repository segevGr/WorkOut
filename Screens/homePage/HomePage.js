import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Header from "../../components/header/Header";
import { Routes } from "../../navigation/Routes";
import style from "./style";

const HomePage = ({ navigation }) => {
  const username = "שגב";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/pictures/HomePageBackground.png")}
        style={style.background}
      >
        <Header title={`ברוך הבא ${username}`} textColor={"#FFF"} />
        <View style={style.optionsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.WorkoutSelection)}
          >
            <Text style={style.optionText}>האימונים שלי</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>התפריט שלי</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>בנק תרגילים</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>בנק תחליפים</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>טיפים</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.optionText}>התנתקות</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.versionDetails}>MyWorkout v1.0.0</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomePage;
