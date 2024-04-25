import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { horizontalScale } from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";
import style from "./style";

const Header = ({
  title,
  canGoBack,
  optionButtonIcon,
  optionButtonFunction,
  textColor,
}) => {
  const navigation = useNavigation();

  const getRightIcon = () => {
    if (optionButtonIcon?.icon) {
      return (
        <TouchableOpacity onPress={optionButtonFunction}>
          <FontAwesomeIcon
            icon={optionButtonIcon}
            size={horizontalScale(25)}
            color={textColor}
          />
        </TouchableOpacity>
      );
    }
    return optionButtonIcon;
  };

  return (
    <View style={style.headerContainer}>
      <View style={style.headerItemsContainer}>
        <View style={style.backButtonContainer}>
          {canGoBack && (
            <TouchableOpacity onPress={navigation.goBack}>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                size={horizontalScale(25)}
                color={textColor}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={{ ...style.title, color: textColor }}>{title}</Text>
        <View style={style.optionsButtonContainer}>{getRightIcon()}</View>
      </View>
      <View style={style.divider} />
    </View>
  );
};

Header.defaultProps = {
  textColor: Colors.black,
  canGoBack: true,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  canGoBack: PropTypes.bool,
  optionButtonIcon: PropTypes.object,
  optionButtonFunction: PropTypes.func,
  textColor: PropTypes.string,
};

export default Header;
