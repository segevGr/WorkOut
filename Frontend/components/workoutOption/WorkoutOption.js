import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import OptionContainer from "../optionContainer/OptionContainer";

const WorkOutOption = ({ workoutName, picture, navigatePress }) => {
  return (
    <Pressable onPress={navigatePress}>
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
    </Pressable>
  );
};

WorkOutOption.prototype = {
  workoutName: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  navigatePress: PropTypes.func.isRequired,
};

export default WorkOutOption;
