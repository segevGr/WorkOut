import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong, faBars } from "@fortawesome/free-solid-svg-icons";
import { horizontalScale } from "../../assets/styles/scaling";

const Header = ({ title, fontFamily }) => {
  return (
    <View style={style.headerContainer}>
      <View style={style.headerItemsContainer}>
        <TouchableOpacity style={style.backButtonContainer}>
          <FontAwesomeIcon icon={faArrowLeftLong} size={horizontalScale(20)} />
        </TouchableOpacity>
        <Text style={{ ...style.title, fontFamily: fontFamily }}>{title}</Text>
        <TouchableOpacity style={style.optionsButtonContainer}>
          <FontAwesomeIcon icon={faBars} size={horizontalScale(20)} />
        </TouchableOpacity>
      </View>
      <View style={style.divider} />
    </View>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
};

export default Header;
