import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import style from "./style";

const BorderContainer = ({ content, containerStyle }) => {
  return <View style={[style.container, containerStyle]}>{content}</View>;
};

BorderContainer.defaultProps = {
  containerStyle: style.default,
};

BorderContainer.prototype = {
  content: PropTypes.node.isRequired,
  containerStyle: PropTypes.object,
};

export default BorderContainer;
