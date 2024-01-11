import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import OptionContainer from "../optionContainer/OptionContainer";

const WorkOutOption = ({ workoutName, picture, navigatePress }) => {
  return (
    <TouchableOpacity onPress={navigatePress}>
      <OptionContainer
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
          </>
        }
      ></OptionContainer>
    </TouchableOpacity>
  );
};

WorkOutOption.prototype = {
  workoutName: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  navigatePress: PropTypes.func.isRequired,
};

export default WorkOutOption;
