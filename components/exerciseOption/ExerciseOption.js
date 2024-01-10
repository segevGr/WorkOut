import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { Video } from "expo-av";
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import OptionContainer from "../optionContainer/OptionContainer";
import ExerciseCollapseClose from "../exerciseCollapseClose/ExerciseCollapseClose";
import ExerciseCollapseOpen from "../exerciseCollapseOpen/ExerciseCollapseOpen";
import { Strings } from "../../assets/strings/Strings";

const ExerciseOption = ({
  exerciseName,
  regularManropeFont,
  boldManropeFont,
}) => {
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
      containerStyle={style.mainExerciseContainerStyle}
      content={
        <>
          <ExerciseCollapseClose
            handlePress={handlePress}
            collapseImage={collapseImage}
            fontFamily={regularManropeFont}
            exerciseName={exerciseName}
          />
          <Collapsible collapsed={isCollapsed}>
            <ExerciseCollapseOpen
              regularManropeFont={regularManropeFont}
              boldManropeFont={boldManropeFont}
              title={Strings.Sets}
              backgroundColor={"#FFFFFF"}
            />
            <ExerciseCollapseOpen
              regularManropeFont={regularManropeFont}
              boldManropeFont={boldManropeFont}
              title={Strings.Notes}
              backgroundColor={"#F6FAFD"}
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
  exerciseName: PropTypes.string.isRequired,
  regularManropeFont: PropTypes.string.isRequired,
  boldManropeFont: PropTypes.string.isRequired,
};

export default ExerciseOption;
