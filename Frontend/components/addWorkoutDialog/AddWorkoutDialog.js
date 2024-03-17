import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";

import { createWorkout } from "../../api/MyWorkouts";
import getUserId from "../../hooks/getUserId";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

import Strings from "../../assets/strings/Strings";
import style from "./style";

const AddWorkoutDialog = ({ visible, onClose }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [showError, setShowError] = useState(false);
  const userId = getUserId();
  const userToken = getUserToken();

  const closeDialog = () => {
    onClose();
    setWorkoutName("");
    setShowError(false);
  };

  const createNewWorkout = async () => {
    if (workoutName === "") {
      setShowError(true);
      return;
    }
    try {
      await createWorkout(userToken, userId, workoutName, "workoutA");
      closeDialog();
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in createWorkout: [${error}]`);
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={style.backgroundContainer}>
        <View style={style.dialogContainer}>
          <Text style={style.title}>{Strings.NewWorkoutDialogTitle}</Text>
          <TextInput
            style={style.input}
            onChangeText={setWorkoutName}
            value={workoutName}
            autoFocus={true}
          />
          {showError && (
            <Text style={style.errorMsg}>{Strings.MissingDetails}</Text>
          )}
          <View style={style.btnsContainer}>
            <Button title={Strings.Cancel} onPress={closeDialog} />
            <Button title={Strings.Submit} onPress={createNewWorkout} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddWorkoutDialog;
