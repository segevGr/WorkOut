import React from "react";

import { Video } from "expo-av";
import PropTypes from "prop-types";

import style from "./style";

import OptionContainer from "../optionContainer/OptionContainer";

const VideoContainer = ({ videoSource }) => {
  return (
    <OptionContainer
      containerStyle={style.videoContainer}
      content={
        <>
          <Video source={videoSource} style={style.video} useNativeControls />
        </>
      }
    />
  );
};

VideoContainer.prototype = {
  videoSource: PropTypes.number.isRequired,
};

export default VideoContainer;
