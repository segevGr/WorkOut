import React from "react";
import { Image } from "react-native";

import { Video } from "expo-av";
import PropTypes from "prop-types";

import style from "./style";

import BorderContainer from "../borderContainer/BorderContainer";

const InnerMediaContainer = ({ mediaType, mediaSource }) => {
  return (
    <BorderContainer
      containerStyle={style.container}
      content={
        <>
          {mediaType === "video" ? (
            <Video source={mediaSource} style={style.media} useNativeControls />
          ) : (
            <Image source={mediaSource} style={style.media} />
          )}
        </>
      }
    />
  );
};

InnerMediaContainer.prototype = {
  mediaType: PropTypes.string.isRequired,
  mediaSource: PropTypes.number.isRequired,
};

export default InnerMediaContainer;
