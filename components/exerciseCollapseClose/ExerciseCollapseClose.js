import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { horizontalScale } from "../../assets/styles/scaling";

const ExerciseCollapseClose = ({
  handlePress,
  collapseImage,
  fontFamily,
  exerciseName,
}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()} style={style.containerView}>
      <View style={style.collapseContainer}>
        <FontAwesomeIcon icon={collapseImage} size={horizontalScale(25)} />
      </View>
      <Text style={{ ...style.exerciseTitle, fontFamily: fontFamily }}>
        {exerciseName}
      </Text>
    </TouchableOpacity>
  );
};

ExerciseCollapseClose.prototype = {
  handlePress: PropTypes.func.isRequired,
  collapseImage: PropTypes.object.isRequired,
  fontFamily: PropTypes.string.isRequired,
  exerciseName: PropTypes.string.isRequired,
};

export default ExerciseCollapseClose;
