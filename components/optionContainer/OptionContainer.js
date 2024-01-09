import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";

const OptionContainer = ({ content, containerStyle }) => {
  return (
    <TouchableOpacity style={{ ...style.optionContainer, ...containerStyle }}>
      {content}
    </TouchableOpacity>
  );
};

OptionContainer.prototype = {
  content: PropTypes.node.isRequired,
  containerStyle: PropTypes.object,
};

export default OptionContainer;
