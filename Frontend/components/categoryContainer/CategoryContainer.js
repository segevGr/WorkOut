import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const CategoryContainer = ({ image, primaryText, secondaryText, onPress }) => {
  return (
    <View style={style.categoryContainer}>
      <View style={style.imageContainer}>
        <Image source={image} resizeMode="contain" style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.primaryText}>{primaryText}</Text>
        <Text style={style.secondaryText}>{secondaryText}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={faChevronRight} size={horizontalScale(24)} />
      </TouchableOpacity>
    </View>
  );
};

CategoryContainer.prototype = {
  image: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CategoryContainer;
