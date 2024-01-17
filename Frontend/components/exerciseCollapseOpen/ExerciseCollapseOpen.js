import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import style from "./style";
import OptionContainer from "../optionContainer/OptionContainer";
import { scaleFontSize } from "../../assets/styles/scaling";
import { updateExerciseNotes } from "../../redux/reducers/ExerciseList";

const ExerciseCollapseOpen = ({
  title,
  exerciseName,
  backgroundColor,
  setsData,
  notesData,
}) => {
  const dispatch = useDispatch();

  const isSets = setsData ? true : false;
  const placeHolder = isSets ? "הכנס את הסטים שלך" : "הכנס הערות";

  const [isEditingSets, setIsEditingSets] = useState(false);
  const [notesValue, setNotesValue] = useState(isSets ? null : notesData);

  const submitChanges = () => {
    isSets
      ? console.log("no")
      : dispatch(
          updateExerciseNotes({
            exerciseName: exerciseName,
            exerciseNotes: notesValue,
          })
        );

    setIsEditingSets(false);
  };

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
              {isEditingSets ? (
                <>
                  <View style={style.titleContainer}>
                    <TouchableOpacity onPress={() => submitChanges()}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        size={scaleFontSize(22)}
                      />
                    </TouchableOpacity>
                    <Text style={style.textsTitle}>{title}</Text>
                  </View>
                  <TextInput
                    style={style.content}
                    placeholder={placeHolder}
                    onChangeText={(notesValue) => setNotesValue(notesValue)}
                    multiline
                  >
                    סט ראשון: 10 קילו 12 חזרות{"\n"}סט שני: 12 קילו 10 חזרות
                  </TextInput>
                </>
              ) : (
                <>
                  <View style={style.titleContainer}>
                    <TouchableOpacity onPress={() => setIsEditingSets(true)}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size={scaleFontSize(22)}
                      />
                    </TouchableOpacity>
                    <Text style={style.textsTitle}>{title}</Text>
                  </View>
                  <Text style={style.content}>
                    {isSets ? "ggggg" : notesValue}
                  </Text>
                </>
              )}
            </View>
          </>
        }
      />
    </View>
  );
};

ExerciseCollapseOpen.defaultProps = {
  backgroundColor: "#FFFFFF",
  setsData: null,
  notesData: null,
};

ExerciseCollapseOpen.prototype = {
  title: PropTypes.string.isRequired,
  exerciseName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  setsData: PropTypes.object,
  notesData: PropTypes.string,
};

export default ExerciseCollapseOpen;
