import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import BorderContainer from "../borderContainer/BorderContainer";

const WorkOutOption = ({ workoutName, picture, navigatePress }) => {
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
