import React, { useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { createWorkout } from "../../api/MyWorkouts";
import getUserId from "../../hooks/getUserId";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

import Strings from "../../assets/strings/Strings";
import style from "./style";

const AddWorkoutDialog = ({ visible, onClose }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const userId = getUserId();
  const userToken = getUserToken();

  const closeDialog = () => {
    onClose();
    setWorkoutName("");
    setShowError(false);
    setIsSubmitDisabled(false);
  };

  const createNewWorkout = async () => {
    if (workoutName === "") {
      setShowError(true);
      return;
    }
    setIsSubmitDisabled(true);
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
      <TouchableOpacity
        style={style.backgroundContainer}
        activeOpacity={1}
        onPress={closeDialog}
      >
        <TouchableOpacity style={style.dialogContainer} activeOpacity={1}>
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
            <Button
              title={Strings.Submit}
              disabled={isSubmitDisabled}
              onPress={createNewWorkout}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddWorkoutDialog;
