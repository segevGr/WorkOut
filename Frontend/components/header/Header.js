import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong, faBars } from "@fortawesome/free-solid-svg-icons";

import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const Header = ({ title, backPress, textColor }) => {
  return (
    <View style={style.headerContainer}>
      <View style={style.headerItemsContainer}>
        <View style={style.backButtonContainer}>
          {backPress ? (
            <TouchableOpacity onPress={backPress}>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                size={horizontalScale(25)}
                color={textColor}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={{ ...style.title, color: textColor }}>{title}</Text>
        <TouchableOpacity style={style.optionsButtonContainer}>
          <FontAwesomeIcon
            icon={faBars}
            size={horizontalScale(25)}
            color={textColor}
          />
        </TouchableOpacity>
      </View>
      <View style={style.divider} />
    </View>
  );
};

Header.defaultProps = {
  textColor: "#000",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  backPress: PropTypes.func,
  textColor: PropTypes.string,
};

export default Header;
