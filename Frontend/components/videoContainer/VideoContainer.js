import React from "react";

import { Video } from "expo-av";
import PropTypes from "prop-types";

import style from "./style";

import BorderContainer from "../borderContainer/BorderContainer";

const VideoContainer = ({ videoSource }) => {
  return (
    <BorderContainer
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
