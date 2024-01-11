import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { Routes } from "../../navigation/Routes";
import globalStyle from "../../assets/styles/globalStyle";

import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";

const WorkoutSelection = ({ navigation }) => {
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
