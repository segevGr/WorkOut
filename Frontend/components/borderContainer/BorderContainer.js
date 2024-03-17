import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import style from "./style";

const BorderContainer = ({ children, containerStyle }) => {
  return <View style={[style.container, containerStyle]}>{children}</View>;
};

BorderContainer.defaultProps = {
  containerStyle: style.default,
};

BorderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.object,
};

export default BorderContainer;
