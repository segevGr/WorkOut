import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useSelector } from "react-redux";

import { Routes } from "../../navigation/Routes";
import globalStyle from "../../assets/styles/globalStyle";

import Header from "../../components/header/Header";
import ExerciseOption from "../../components/exerciseOption/ExerciseOption";

const Workout = ({ navigation, route }) => {
  const workoutName = route.params.workoutName;
  const exerciseDetails = useSelector((state) => state.userDetails);

  const exerciseTypes = [
    {
      exerciseName: "לחיצת חזה",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: exerciseDetails.exerciseName,
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "אימון Full Body",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "test3",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "test4",
      picture: require("../../assets/pictures/workout.jpg"),
    },
  ];

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={workoutName} backPress={() => navigation.goBack()} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exerciseTypes}
        renderItem={({ item }) => (
          <ExerciseOption
            key={item.exerciseName}
            exerciseName={item.exerciseName}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Workout;
