import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { horizontalScale } from "../../assets/styles/scaling";

import style from "./style";

const ExerciseCollapseClose = ({
  handlePress,
  collapseImage,
  exerciseName,
}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()} style={style.containerView}>
      <View style={style.collapseContainer}>
        <FontAwesomeIcon icon={collapseImage} size={horizontalScale(25)} />
      </View>
      <Text style={style.exerciseTitle}>{exerciseName}</Text>
    </TouchableOpacity>
  );
};

ExerciseCollapseClose.prototype = {
  handlePress: PropTypes.func.isRequired,
  collapseImage: PropTypes.object.isRequired,
  exerciseName: PropTypes.string.isRequired,
};

export default ExerciseCollapseClose;
