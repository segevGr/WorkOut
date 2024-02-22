import React from "react";
import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";

import PropTypes from "prop-types";
import BorderContainer from "../borderContainer/BorderContainer";
import ShowAlert from "../../utils/ShowAlert";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";
import Strings from "../../assets/strings/Strings";

const WorkOutOption = ({ workoutName, picture, navigatePress }) => {
  const showDeleteAlert = () => {
    ShowAlert({
      title: Strings.DeleteWorkoutAlertTitle.replace("***", workoutName),
      message: null,
      btnText: Strings.Yes,
      pressFunc: () => null,
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
  picture: PropTypes.object.isRequired,
  navigatePress: PropTypes.func.isRequired,
};

export default WorkOutOption;
