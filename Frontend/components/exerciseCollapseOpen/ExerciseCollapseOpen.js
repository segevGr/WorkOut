import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import PropTypes from "prop-types";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import style from "./style";
import OptionContainer from "../optionContainer/OptionContainer";
import { scaleFontSize } from "../../assets/styles/scaling";

const ExerciseCollapseOpen = ({ title, backgroundColor }) => {
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
              <View style={style.titleContainer}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={faPencil} size={scaleFontSize(22)} />
                </TouchableOpacity>
                <Text style={style.textsTitle}>{title}</Text>
              </View>
              <Text style={style.content}>
                סט ראשון: 10 קילו 12 חזרות{"\n"}סט שני: 12 קילו 10 חזרות
              </Text>
            </View>
          </>
        }
      />
    </View>
  );
};

ExerciseCollapseOpen.defaultProps = {
  backgroundColor: "#FFFFFF",
};

ExerciseCollapseOpen.prototype = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default ExerciseCollapseOpen;
