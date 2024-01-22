import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import BorderContainer from "../borderContainer/BorderContainer";
import CollapseHeader from "../collapseHeader/CollapseHeader";
import VideoContainer from "../videoContainer/VideoContainer";

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
    <BorderContainer
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
    ></BorderContainer>
  );
};

CollapseContainer.prototype = {
  exerciseName: PropTypes.string.isRequired,
  collapseOpenContent: PropTypes.node.isRequired,
  exerciseVideo: PropTypes.string,
};

export default CollapseContainer;
