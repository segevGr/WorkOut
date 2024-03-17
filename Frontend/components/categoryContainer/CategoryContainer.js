import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Routes } from "../../navigation/Routes";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const CategoryContainer = ({
  image,
  type,
  primaryText,
  secondaryText,
  itemId,
}) => {
  const navigation = useNavigation();

  const navigateToCategory = () => {
    if (type === "Tips") {
      navigation.navigate(Routes.Tips, { headerText: primaryText });
    } else {
      navigation.navigate(Routes.MuscleExercisesBank, {
        muscleId: itemId,
        muscleName: primaryText,
      });
    }
  };

  return (
    <View style={style.categoryContainer}>
      <View style={style.imageContainer}>
        <Image source={image} resizeMode="contain" style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.primaryText}>{primaryText}</Text>
        <Text style={style.secondaryText}>{secondaryText}</Text>
      </View>
      <TouchableOpacity onPress={navigateToCategory}>
        <FontAwesomeIcon icon={faChevronRight} size={horizontalScale(24)} />
      </TouchableOpacity>
    </View>
  );
};

CategoryContainer.propTypes = {
  image: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  itemId: PropTypes.string,
};

export default CategoryContainer;
