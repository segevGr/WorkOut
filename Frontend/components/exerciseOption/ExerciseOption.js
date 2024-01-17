import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { Video } from "expo-av";
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { Strings } from "../../assets/strings/Strings";

import OptionContainer from "../optionContainer/OptionContainer";
import ExerciseCollapseClose from "../exerciseCollapseClose/ExerciseCollapseClose";
import ExerciseCollapseOpen from "../exerciseCollapseOpen/ExerciseCollapseOpen";

const ExerciseOption = ({ exerciseData }) => {
  const exerciseName = exerciseData.exerciseName;

  const [isCollapsed, setCollapsed] = useState(true);
  const [collapseImage, setCollapseImage] = useState(faChevronDown);

  const handlePress = () => {
    setCollapsed(!isCollapsed);
    isCollapsed
      ? setCollapseImage(faChevronUp)
      : setCollapseImage(faChevronDown);
  };

  return (
    <OptionContainer
      content={
        <>
          <ExerciseCollapseClose
            handlePress={handlePress}
            collapseImage={collapseImage}
            exerciseName={exerciseName}
          />
          <Collapsible collapsed={isCollapsed}>
            <ExerciseCollapseOpen
              title={Strings.Sets}
              exerciseName={exerciseName}
              setsData={exerciseData.exerciseSets}
            />
            <ExerciseCollapseOpen
              title={Strings.Notes}
              exerciseName={exerciseName}
              backgroundColor="#F6FAFD"
              notesData={exerciseData.exerciseNotes}
            />
            <OptionContainer
              containerStyle={style.videoContainer}
              content={
                <>
                  <Video
                    source={require("../../assets/videos/benchPress.mp4")}
                    style={style.video}
                    useNativeControls
                  />
                </>
              }
            />
          </Collapsible>
        </>
      }
    ></OptionContainer>
  );
};

ExerciseOption.prototype = {
  exerciseData: PropTypes.object.isRequired,
};

export default ExerciseOption;
