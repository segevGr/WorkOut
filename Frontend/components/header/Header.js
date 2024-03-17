import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { horizontalScale } from "../../assets/styles/scaling";
import style from "./style";

const Header = ({
  title,
  canGoBack,
  optionButtonIcon,
  optionButtonFunction,
  textColor,
}) => {
  const navigation = useNavigation();

  return (
    <View style={style.headerContainer}>
      <View style={style.headerItemsContainer}>
        <View style={style.backButtonContainer}>
          {canGoBack ? (
            <TouchableOpacity onPress={navigation.goBack}>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                size={horizontalScale(25)}
                color={textColor}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={{ ...style.title, color: textColor }}>{title}</Text>
        <View
          style={{
            ...style.optionsButtonContainer,
            ...(optionButtonIcon ? {} : { opacity: 0 }),
          }}
        >
          <TouchableOpacity onPress={optionButtonFunction}>
            <FontAwesomeIcon
              icon={optionButtonIcon ? optionButtonIcon : faArrowLeftLong}
              size={horizontalScale(25)}
              color={textColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.divider} />
    </View>
  );
};

Header.defaultProps = {
  textColor: "#000",
  canGoBack: true,
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  canGoBack: PropTypes.boolean,
  optionButtonIcon: PropTypes.func,
  optionButtonFunction: PropTypes.func,
  textColor: PropTypes.string,
};

export default Header;
