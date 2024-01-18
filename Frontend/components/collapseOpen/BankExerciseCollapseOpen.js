import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import OptionContainer from "../optionContainer/OptionContainer";
import { scaleFontSize } from "../../assets/styles/scaling";
import {
  updateExerciseNotes,
  updateExerciseSets,
} from "../../redux/reducers/UserExerciseList";

const BankExerciseCollapseOpen = ({ title, exerciseData, backgroundColor }) => {
  return (
    <View>
      <OptionContainer
        containerStyle={{
          ...style.innerContainer,
          backgroundColor: backgroundColor,
        }}
        content={
          <>
            <View style={style.contentContainer}>
              <Text style={style.textsTitle}>{title}</Text>
              <Text style={style.content}>{exerciseData}</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

BankExerciseCollapseOpen.defaultProps = {
  backgroundColor: "#FFFFFF",
};

BankExerciseCollapseOpen.prototype = {
  title: PropTypes.string.isRequired,
  exerciseData: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default BankExerciseCollapseOpen;
