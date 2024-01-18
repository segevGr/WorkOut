import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { Video } from "expo-av";
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { Strings } from "../../assets/strings/Strings";

import OptionContainer from "../optionContainer/OptionContainer";
import CollapseHeader from "../collapseHeader/CollapseHeader";
import VideoContainer from "../videoContainer/VideoContainer";
import UserExerciseCollapseOpen from "../collapseOpen/UserExerciseCollapseOpen";

const CollapseContainer = ({
  exerciseName,
  collapseOpenContent,
  exerciseVideo,
}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [collapseImage, setCollapseImage] = useState(faChevronDown);

  const handlePress = () => {
    setCollapsed(!isCollapsed);
    setCollapseImage(isCollapsed ? faChevronUp : faChevronDown);
  };

  return (
    <OptionContainer
      content={
        <>
          <CollapseHeader
            handlePress={handlePress}
            collapseImage={collapseImage}
            exerciseName={exerciseName}
          />
          <Collapsible collapsed={isCollapsed}>
            {collapseOpenContent}
            {exerciseVideo ? (
              <VideoContainer videoSource={exerciseVideo} />
            ) : null}
          </Collapsible>
        </>
      }
    ></OptionContainer>
  );
};

CollapseContainer.prototype = {
  exerciseName: PropTypes.string.isRequired,
  collapseOpenContent: PropTypes.node.isRequired,
  exerciseVideo: PropTypes.string,
};

export default CollapseContainer;
