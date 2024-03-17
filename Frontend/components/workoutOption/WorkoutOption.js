import React from "react";
import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import getUserToken from "../../hooks/getToken";
import { Routes } from "../../navigation/Routes";
import { deleteWorkoutFromList } from "../../api/MyWorkouts";
import BorderContainer from "../borderContainer/BorderContainer";
import ShowAlert, { somethingWrongAlert } from "../../utils/ShowAlert";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";
import Strings from "../../assets/strings/Strings";

const WorkOutOption = ({
  workoutName,
  workoutId,
  picture,
  setWorkoutsList,
}) => {
  const userToken = getUserToken();
  const navigation = useNavigation();

  const navigateToWorkout = () => {
    navigation.navigate(Routes.Workout, { workoutName, workoutId });
  };

  const showDeleteAlert = () => {
    ShowAlert({
      title: Strings.DeleteWorkoutAlertTitle.replace("***", workoutName),
      message: Strings.DeleteWorkoutAlertContent,
      btnText: Strings.Yes,
      pressFunc: async () => {
        try {
          await deleteWorkoutFromList(userToken, workoutId);
          setWorkoutsList((prevList) =>
            prevList.filter((workout) => workout._id !== workoutId)
          );
        } catch (error) {
          somethingWrongAlert();
          console.error(`Error in deleteWorkoutFromList: [${error}]`);
        }
      },
      cancelText: Strings.No,
    });
  };

  return (
    <Pressable onPress={navigateToWorkout}>
      <BorderContainer>
        <Image source={picture} resizeMode="cover" style={style.workoutImage} />
        <View style={style.detailsContainer}>
          <Text style={style.workoutDetails}>{workoutName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => showDeleteAlert(workoutName)}
          style={style.deleteButton}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            size={horizontalScale(17)}
            color={"white"}
          />
        </TouchableOpacity>
      </BorderContainer>
    </Pressable>
  );
};

WorkOutOption.prototype = {
  workoutName: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  setWorkoutsList: PropTypes.array,
};

export default WorkOutOption;
