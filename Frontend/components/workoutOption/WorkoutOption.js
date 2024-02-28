import React from "react";
import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import getUserToken from "../../hooks/getToken";
import { deleteWorkoutFromList } from "../../api/MyWorkouts";
import BorderContainer from "../borderContainer/BorderContainer";
import ShowAlert, { somethingWrongAlert } from "../../utils/ShowAlert";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";
import Strings from "../../assets/strings/Strings";

const WorkOutOption = ({
  workoutName,
  workoutId,
  picture,
  navigatePress,
  setWorkoutsList,
}) => {
  const userToken = getUserToken();
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
    <Pressable onPress={navigatePress}>
      <BorderContainer
        content={
          <>
            <Image
              source={picture}
              resizeMode="cover"
              style={style.workoutImage}
            />
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
          </>
        }
      ></BorderContainer>
    </Pressable>
  );
};

WorkOutOption.prototype = {
  workoutName: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  navigatePress: PropTypes.func.isRequired,
  setWorkoutsList: PropTypes.array,
};

export default WorkOutOption;
