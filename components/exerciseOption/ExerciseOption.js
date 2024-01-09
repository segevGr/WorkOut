import React, { useState } from "react";
import { View, Text } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import OptionContainer from "../optionContainer/OptionContainer";
import Collapsible from "react-native-collapsible";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ExerciseCollapseClose from "../exerciseCollapseClose/ExerciseCollapseClose";

const ExerciseOption = ({ exerciseName, fontFamily }) => {
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
      containerStyle={style.containerStyle}
      content={
        <>
          <ExerciseCollapseClose
            handlePress={handlePress}
            collapseImage={collapseImage}
            fontFamily={fontFamily}
            exerciseName={exerciseName}
          />
          <Collapsible collapsed={isCollapsed}>
            <OptionContainer
              content={
                <>
                  <Text>gggggggggggggggggggggggg</Text>
                </>
              }
              containerStyle={style.setsContainer}
            />
          </Collapsible>
        </>
      }
    ></OptionContainer>
  );
};

ExerciseOption.prototype = {
  exerciseName: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
};

export default ExerciseOption;
