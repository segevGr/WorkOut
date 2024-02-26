import React, { useState } from "react";
import { View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import PropTypes from "prop-types";

import CollapseContainer from "../collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../collapseOpen/CollapseOpenWithoutEdit";

import style from "./style";
import Strings from "../../assets/strings/Strings";
import Indexes from "../../assets/videos/Indexes";

const ExerciseBankItem = ({ exercise, isSelected }) => {
  const [isEnabled, setIsEnabled] = useState(isSelected);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={isSelected !== null ? style.container : {}}>
      {isSelected !== null && (
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      )}
      <CollapseContainer
        name={exercise.exerciseName}
        media={Indexes[exercise.exerciseVideo]}
        mediaType={"video"}
        collapseOpenContent={
          <>
            <CollapseOpenWithoutEdit
              title={Strings.WorksOn}
              exerciseData={exercise.workOn}
            />
            <CollapseOpenWithoutEdit
              title={Strings.Highlights}
              exerciseData={exercise.highlights}
              backgroundColor="#F6FAFD"
            />
          </>
        }
      />
    </View>
  );
};

ExerciseBankItem.defaultProps = {
  backgroundColor: "#FFFFFF",
};

ExerciseBankItem.prototype = {
  exercise: PropTypes.object.isRequired,
};

export default ExerciseBankItem;
