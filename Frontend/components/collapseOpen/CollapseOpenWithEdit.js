import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { updateMyExercise } from "../../api/MyWorkouts";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

import BorderContainer from "../borderContainer/BorderContainer";
import style from "./style";
import { scaleFontSize } from "../../assets/styles/scaling";
import { Strings } from "../../assets/strings/Strings";

const CollapseOpenWithEdit = ({
  userToken,
  workoutId,
  exerciseId,
  backgroundColor,
  setsData,
  notesData,
}) => {
  const isSets = setsData ? true : false;
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
        content={
          <>
            <View style={style.contentContainer}>
              {isEditing ? (
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
                    ref={inputRef}
                    style={style.content}
                    placeholder={placeHolder}
                    value={isSets ? setsValue : notesValue}
                    onChangeText={(value) => setValues(value)}
                    multiline
                  />
                </>
              ) : (
                <>
                  <View style={style.titleContainer}>
                    <TouchableOpacity onPress={() => setIsEditing(true)}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size={scaleFontSize(22)}
                      />
                    </TouchableOpacity>
                    <Text style={style.textsTitle}>{title}</Text>
                  </View>
                  <Text style={style.content}>
                    {isSets ? setsData : notesValue}
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

CollapseOpenWithEdit.defaultProps = {
  backgroundColor: "#FFFFFF",
  setsData: null,
  notesData: null,
};

CollapseOpenWithEdit.prototype = {
  userToken: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  exerciseId: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  setsData: PropTypes.object,
  notesData: PropTypes.string,
};

export default CollapseOpenWithEdit;
