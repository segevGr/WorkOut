import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import { Routes } from "../../navigation/Routes";
import getUserToken from "../../hooks/getToken";
import getUserId from "../../hooks/getUserId";
import { getMyWorkoutsList } from "../../api/MyWorkouts";

import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";
import AddWorkoutDialog from "../../components/addWorkoutDialog/AddWorkoutDialog";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/workouts/Indexes";

const MyWorkoutsList = ({ navigation }) => {
  const userToken = getUserToken();
  const userId = getUserId();
  const [renderScreen, setRenderScreen] = useState(false);

  const [workoutDialogVisibility, setWorkoutDialogVisibility] = useState(false);

  const [workoutsList, setWorkoutsList] = useState([]);
  const getMyWorkouts = async (userToken) => {
    try {
      setWorkoutsList(await getMyWorkoutsList(userToken, userId));
    } catch (error) {
      console.error(`Error in getMyWorkouts: [${error}]`);
    }
  };

  useEffect(() => {
    getMyWorkouts(userToken, userId);
  }, [userToken, userId, renderScreen]);

  const navigateToWorkout = (workoutName, workoutId) => {
    navigation.navigate(Routes.Workout, { workoutName, workoutId });
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <AddWorkoutDialog
        visible={workoutDialogVisibility}
        onClose={() => {
          setWorkoutDialogVisibility(false);
          setRenderScreen(!renderScreen);
        }}
        userId={userId}
        userToken={userToken}
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={Strings.WorkOuts}
              backPress={() => navigation.goBack()}
              optionButtonIcon={faPlus}
              optionButtonFunction={() => setWorkoutDialogVisibility(true)}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={workoutsList}
        renderItem={({ item }) => (
          <WorkOutOption
            key={item._id}
            workoutName={item.workoutName}
            workoutId={item._id}
            userToken={userToken}
            picture={Indexes[item.workoutImage]}
            setWorkoutsList={setWorkoutsList}
            navigatePress={() => navigateToWorkout(item.workoutName, item._id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MyWorkoutsList;
