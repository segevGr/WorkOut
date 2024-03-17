import React from "react";
import { Image, View } from "react-native";
import { Video } from "expo-av";
import PropTypes from "prop-types";

import BorderContainer from "../borderContainer/BorderContainer";

import style from "./style";

const InnerMediaContainer = ({ mediaType, mediaSource }) => {
  return (
    <View>
      <BorderContainer containerStyle={style.container}>
        {mediaType === "video" ? (
          <Video source={mediaSource} style={style.media} useNativeControls />
        ) : (
          <Image source={mediaSource} style={style.media} />
        )}
      </BorderContainer>
    </View>
  );
};

InnerMediaContainer.prototype = {
  mediaType: PropTypes.string.isRequired,
  mediaSource: PropTypes.number.isRequired,
};

export default InnerMediaContainer;
