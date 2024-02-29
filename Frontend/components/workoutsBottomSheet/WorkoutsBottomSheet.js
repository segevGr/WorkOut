import React, { useState } from "react";
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
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleSwitch = async (value, exerciseId) => {
    setIsDisabled(true);
    if (value === true) {
      try {
        const workout = await addExerciseToWorkout(
          userToken,
          workoutId,
          exerciseId
        );
        await setExerciseList(workout);
      } catch (error) {
        somethingWrongAlert();
        console.error(`Error in addExerciseToWorkout: [${error}]`);
      } finally {
        setIsDisabled(false);
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

ExerciseBankItem.prototype = {
  exercisesBankList: PropTypes.array.isRequired,
  exerciseList: PropTypes.array.isRequired,
  setExerciseList: PropTypes.func.isRequired,
  bottomSheetRef: PropTypes.object.isRequired,
  workoutId: PropTypes.string.isRequired,
};

export default WorkoutsBottomSheet;
