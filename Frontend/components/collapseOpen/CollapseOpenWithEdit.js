import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

import BorderContainer from "../borderContainer/BorderContainer";

import { updateMyExercise } from "../../api/MyWorkouts";
import { somethingWrongAlert } from "../../utils/ShowAlert";
import getUserToken from "../../hooks/getToken";

import Strings from "../../assets/strings/Strings";
import Colors from "../../assets/styles/Colors";
import { scaleFontSize } from "../../assets/styles/scaling";

import style from "./style";

const CollapseOpenWithEdit = ({
  workoutId,
  exerciseId,
  backgroundColor,
  setsData,
  notesData,
  isSets,
}) => {
  const userToken = getUserToken();
  const placeHolder = isSets
    ? Strings.SetsPlaceholder
    : Strings.NotesPlaceholder;
  const title = isSets ? Strings.Sets : Strings.Notes;

  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const [notesValue, setNotesValue] = useState(isSets ? null : notesData);
  const [setsValue, setSetsValue] = useState(isSets ? setsData : null);

  const setValues = (value) => {
    isSets ? setSetsValue(value) : setNotesValue(value);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const submitChanges = async () => {
    const body = isSets ? { sets: setsValue } : { notes: notesValue };

    try {
      await updateMyExercise(userToken, workoutId, exerciseId, body);
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in updateMyExercise: [${error}]`);
    }

    setIsEditing(false);
  };

  return (
    <View>
      <BorderContainer
        containerStyle={{
          ...style.innerContainer,
          backgroundColor: backgroundColor,
        }}
      >
        <View style={style.contentContainer}>
          {isEditing ? (
            <>
              <View style={style.titleContainer}>
                <TouchableOpacity onPress={() => submitChanges()}>
                  <FontAwesomeIcon icon={faCheck} size={scaleFontSize(22)} />
                </TouchableOpacity>
                <Text style={style.textsTitle}>{title}</Text>
              </View>
              <TextInput
                ref={inputRef}
                style={style.content}
                placeholder={placeHolder}
                value={isSets ? setsValue : notesValue}
                onChangeText={setValues}
                multiline
              />
            </>
          ) : (
            <>
              <View style={style.titleContainer}>
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <FontAwesomeIcon icon={faPencil} size={scaleFontSize(22)} />
                </TouchableOpacity>
                <Text style={style.textsTitle}>{title}</Text>
              </View>
              <Text style={style.content}>
                {isSets ? setsValue : notesValue}
              </Text>
            </>
          )}
        </View>
      </BorderContainer>
    </View>
  );
};

CollapseOpenWithEdit.defaultProps = {
  backgroundColor: Colors.white,
  setsData: null,
  notesData: null,
  isSets: false,
};

CollapseOpenWithEdit.propTypes = {
  workoutId: PropTypes.string.isRequired,
  exerciseId: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  setsData: PropTypes.string,
  notesData: PropTypes.string,
  isSets: PropTypes.bool,
};

export default CollapseOpenWithEdit;
