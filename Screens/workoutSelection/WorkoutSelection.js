import React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import useFonts from "../../assets/fonts/useFonts";
import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { Routes } from "../../navigation/Routes";

const WorkoutSelection = ({ navigation }) => {
  const fontsLoaded = useFonts({
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={style.loadingContainer}>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  const WorkOutTypes = [
    {
      workoutName: "אימון A",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      workoutName: "אימון B",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      workoutName: "אימון Full Body",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      workoutName: "test3",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      workoutName: "test4",
      picture: require("../../assets/pictures/workout.jpg"),
    },
  ];

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={"WorkOut"} fontFamily={"Montserrat-Bold"} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={WorkOutTypes}
        renderItem={({ item }) => (
          <WorkOutOption
            key={item.workoutName}
            workoutName={item.workoutName}
            picture={item.picture}
            fontFamily={"Manrope-Bold"}
            navigatePress={() => navigation.navigate(Routes.Workout)}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default WorkoutSelection;
