import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import getUserToken from "../../hooks/getToken";
import { getWorkoutExercises } from "../../api/MyWorkouts";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithEdit from "../../components/collapseOpen/CollapseOpenWithEdit";

import globalStyle from "../../assets/styles/globalStyle";
import Strings from "../../assets/strings/Strings";
import Indexes from "../../assets/videos/Indexes";

const Workout = ({ navigation, route }) => {
  const userToken = getUserToken();
  const { workoutName, workoutId } = route.params;

  const [exerciseList, setExerciseList] = useState([]);
  const getExercises = async (userToken) => {
    try {
      setExerciseList(await getWorkoutExercises(userToken, workoutId));
    } catch (error) {
      console.error(`Error in getWorkoutExercises: [${error}]`);
    }
  };

  useEffect(() => {
    getExercises(userToken);
  }, [userToken]);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={workoutName} backPress={() => navigation.goBack()} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exerciseList}
        renderItem={({ item }) => (
          <CollapseContainer
            key={item._id}
            name={item.exerciseId.exerciseName}
            media={Indexes[item.exerciseId.exerciseVideo]}
            mediaType={"video"}
            collapseOpenContent={
              <>
                <CollapseOpenWithEdit
                  userToken={userToken}
                  workoutId={workoutId}
                  exerciseId={item._id}
                  setsData={item.sets}
                />
                <CollapseOpenWithEdit
                  userToken={userToken}
                  workoutId={workoutId}
                  exerciseId={item._id}
                  backgroundColor="#F6FAFD"
                  notesData={item.notes}
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
