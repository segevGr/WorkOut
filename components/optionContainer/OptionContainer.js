import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import style from "./style";

const OptionContainer = ({ content }) => {
  return (
    <TouchableOpacity style={style.optionContainer}>{content}</TouchableOpacity>
  );
};

export default OptionContainer;
