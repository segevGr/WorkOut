import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import getUserToken from "../../hooks/getToken";
import getUserId from "../../hooks/getUserId";
import { getMyWorkoutsList } from "../../api/MyWorkouts";
import { somethingWrongAlert } from "../../utils/ShowAlert";

import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";
import AddWorkoutDialog from "../../components/addWorkoutDialog/AddWorkoutDialog";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/workouts/Indexes";

const MyWorkoutsList = () => {
  const userToken = getUserToken();
  const userId = getUserId();
  const [renderScreen, setRenderScreen] = useState(false);

  const [workoutDialogVisibility, setWorkoutDialogVisibility] = useState(false);

  const [workoutsList, setWorkoutsList] = useState([]);
  const fetchMyWorkouts = async (userToken) => {
    try {
      setWorkoutsList(await getMyWorkoutsList(userToken, userId));
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getMyWorkouts: [${error}]`);
    }
  };

  useEffect(() => {
    fetchMyWorkouts(userToken, userId);
  }, [renderScreen]);

  return (
    <SafeAreaView style={globalStyle.background}>
      <AddWorkoutDialog
        visible={workoutDialogVisibility}
        onClose={() => {
          setWorkoutDialogVisibility(false);
          setRenderScreen(!renderScreen);
        }}
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={Strings.WorkOuts}
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
            picture={Indexes[item.workoutImage]}
            setWorkoutsList={setWorkoutsList}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MyWorkoutsList;
