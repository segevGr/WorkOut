import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong, faBars } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const Header = ({ title, backPress }) => {
  return (
    <View style={style.headerContainer}>
      <View style={style.headerItemsContainer}>
        <TouchableOpacity style={style.backButtonContainer} onPress={backPress}>
          <FontAwesomeIcon icon={faArrowLeftLong} size={horizontalScale(25)} />
        </TouchableOpacity>
        <Text style={style.title}>{title}</Text>
        <TouchableOpacity style={style.optionsButtonContainer}>
          <FontAwesomeIcon icon={faBars} size={horizontalScale(25)} />
        </TouchableOpacity>
      </View>
      <View style={style.divider} />
    </View>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  backPress: PropTypes.func.isRequired,
};

export default Header;
