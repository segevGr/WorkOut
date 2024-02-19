import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import { Routes } from "../../navigation/Routes";
import getUserToken from "../../hooks/getToken";
import getUserId from "../../hooks/getUserId";
import { getMyWorkoutsList } from "../../api/MyWorkoutsList";

import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";

import { Strings } from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/workouts/Indexes";

const MyWorkoutsList = ({ navigation }) => {
  const userToken = getUserToken();
  const userId = getUserId();

  const [workoutsList, setWorkoutsList] = useState([]);
  const getMyWorkouts = async (userToken) => {
    try {
      const results = await getMyWorkoutsList(userToken, userId);
      setWorkoutsList(results);
    } catch (error) {
      console.error(`Error in getMyWorkouts: [${error}]`);
    }
  };

  useEffect(() => {
    getMyWorkouts(userToken, userId);
  }, [userToken, userId]);

  const navigateToWorkout = (workoutName) => {
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
        data={workoutsList}
        renderItem={({ item }) => (
          <WorkOutOption
            key={item._id}
            workoutName={item.workoutName}
            picture={Indexes[item.workoutImage]}
            navigatePress={() => navigateToWorkout(item.workoutName)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MyWorkoutsList;
