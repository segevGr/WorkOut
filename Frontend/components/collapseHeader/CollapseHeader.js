import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { horizontalScale } from "../../assets/styles/scaling";
import style from "./style";

const CollapseHeader = ({ handlePress, collapseImage, name }) => {
  return (
    <TouchableOpacity onPress={() => handlePress()} style={style.containerView}>
      <View style={style.collapseContainer}>
        <FontAwesomeIcon icon={collapseImage} size={horizontalScale(25)} />
      </View>
      <Text style={style.title}>{name}</Text>
    </TouchableOpacity>
  );
};

CollapseHeader.propTypes = {
  handlePress: PropTypes.func.isRequired,
  collapseImage: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default CollapseHeader;
