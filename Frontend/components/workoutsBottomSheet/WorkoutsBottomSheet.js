import React, { useState } from "react";
import { View, FlatList, Switch } from "react-native";
import PropTypes from "prop-types";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import {
  addExerciseToWorkout,
  deleteExerciseFromWorkout,
} from "../../api/MyWorkouts";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

import ExerciseBankItem from "../exerciseBankItem/ExerciseBankItem";

import Colors from "../../assets/styles/Colors";
import style from "./style";

const WorkoutsBottomSheet = ({
  exercisesBankList,
  exerciseList,
  setExerciseList,
  bottomSheetRef,
  workoutId,
}) => {
  const userToken = getUserToken();
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleSwitch = async (value, exerciseId) => {
    setIsDisabled(true);
    try {
      let workout = [];
      if (value === true) {
        workout = await addExerciseToWorkout(userToken, workoutId, exerciseId);
      } else {
        workout = await deleteExerciseFromWorkout(
          userToken,
          workoutId,
          exerciseId
        );
      }
      await setExerciseList(workout);
    } catch (error) {
      somethingWrongAlert();
      console.error(
        `Error in addExerciseToWorkout/deleteExerciseFromWorkout: [${error}]`
      );
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["92%"]}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: Colors.lightBluePrimary, opacity: 1 }}
      index={-1}
      enableContentPanningGesture={true}
    >
      <BottomSheetView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercisesBankList}
          renderItem={({ item }) => {
            let switchValue = exerciseList.includes(item._id);
            return (
              <View style={style.itemContainer}>
                <Switch
                  value={switchValue}
                  onValueChange={async (newValue) =>
                    await toggleSwitch(newValue, item._id)
                  }
                  disabled={isDisabled}
                />
                <ExerciseBankItem exercise={item} />
              </View>
            );
          }}
          keyExtractor={(item) => item._id}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

WorkoutsBottomSheet.propTypes = {
  exercisesBankList: PropTypes.array.isRequired,
  exerciseList: PropTypes.array.isRequired,
  setExerciseList: PropTypes.func.isRequired,
  bottomSheetRef: PropTypes.object.isRequired,
  workoutId: PropTypes.string.isRequired,
};

export default WorkoutsBottomSheet;
