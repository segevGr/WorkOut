import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useSelector } from "react-redux";

import { Routes } from "../../navigation/Routes";
import globalStyle from "../../assets/styles/globalStyle";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import UserExerciseCollapseOpen from "../../components/collapseOpen/UserExerciseCollapseOpen";
import { Strings } from "../../assets/strings/Strings";

const Workout = ({ navigation }) => {
  const workoutsList = useSelector((state) => state.workoutsList);
  const workoutName = workoutsList.selectedWorkout;

  let userExerciseList = useSelector((state) => state.userExerciseList);
  userExerciseList = userExerciseList.exercises.filter((exercise) =>
    exercise.containInWorkout.includes(workoutName)
  );

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={workoutName} backPress={() => navigation.goBack()} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={userExerciseList}
        renderItem={({ item }) => (
          <CollapseContainer
            key={item.exerciseName}
            name={item.exerciseName}
            media={item.exerciseVideoName}
            mediaType={"video"}
            collapseOpenContent={
              <>
                <UserExerciseCollapseOpen
                  title={Strings.Sets}
                  exerciseName={item.exerciseName}
                  setsData={item.exerciseSets}
                />
                <UserExerciseCollapseOpen
                  title={Strings.Notes}
                  exerciseName={item.exerciseName}
                  backgroundColor="#F6FAFD"
                  notesData={item.exerciseNotes}
                />
              </>
            }
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Workout;
