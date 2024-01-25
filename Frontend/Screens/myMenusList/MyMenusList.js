import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedWorkout } from "../../redux/reducers/WorkoutsList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";

import { Strings } from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";

const MyMenusList = ({ navigation }) => {
  const workoutsList = useSelector((state) => state.workoutsList);
  const dispatch = useDispatch();

  const navigateToWorkout = (workoutName) => {
    dispatch(updateSelectedWorkout(workoutName));
    navigation.navigate(Routes.Workout);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={Strings.WorkOuts}
              backPress={() => navigation.goBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={workoutsList.WorkOutTypes}
        renderItem={({ item }) => (
          <WorkOutOption
            key={item.workoutName}
            workoutName={item.workoutName}
            picture={item.picture}
            navigatePress={() => navigateToWorkout(item.workoutName)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MyMenusList;
