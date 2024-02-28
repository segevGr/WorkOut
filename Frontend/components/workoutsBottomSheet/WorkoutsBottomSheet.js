import React from "react";
import { View, FlatList, Switch } from "react-native";
import PropTypes from "prop-types";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

// Assets
import ExerciseBankItem from "../exerciseBankItem/ExerciseBankItem";
import style from "./style";
import { addExerciseToWorkout } from "../../api/MyWorkouts";

const WorkoutsBottomSheet = ({
  exercisesBankList,
  exerciseList,
  setExerciseList,
  bottomSheetRef,
  workoutId,
}) => {
  const userToken = getUserToken();

  const toggleSwitch = async (value, exerciseId) => {
    if (value === true) {
      try {
        const workout = await addExerciseToWorkout(
          userToken,
          workoutId,
          exerciseId
        );
        setExerciseList(workout);
      } catch (error) {
        somethingWrongAlert();
        console.error(`Error in addExerciseToWorkout: [${error}]`);
      }
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["92%"]}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: "#D4E5F7", opacity: 1 }}
      index={-1}
      enableContentPanningGesture={true}
    >
      <BottomSheetView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercisesBankList}
          renderItem={({ item }) => {
            return (
              <View style={style.itemContainer}>
                <Switch
                  value={exerciseList.includes(item._id)}
                  onValueChange={async (newValue) =>
                    await toggleSwitch(newValue, item._id)
                  }
                />
                <ExerciseBankItem exercise={item} />
              </View>
            );
          }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

ExerciseBankItem.prototype = {
  exercisesBankList: PropTypes.array.isRequired,
  exerciseList: PropTypes.array.isRequired,
  setExerciseList: PropTypes.func.isRequired,
  bottomSheetRef: PropTypes.object.isRequired,
  workoutId: PropTypes.string.isRequired,
};

export default WorkoutsBottomSheet;
